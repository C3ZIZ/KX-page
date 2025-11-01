// DottedOverlay.jsx
// Purpose: Absolute-positioned <canvas> overlay that renders an animated dotted grid reacting to cursor/touch.

import React, { useEffect, useRef } from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
// (none)

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
// (none)

/**
 * @typedef {Object} DottedOverlayProps
 * @property {number}  [spacing=24]        - Distance between dots in px.
 * @property {number}  [baseRadius=1.2]    - Base dot radius in px.
 * @property {string}  [color='rgba(253,243,232,0.35)'] - Dot color.
 * @property {number}  [scaleNear=2]       - Scale factor when dot is near the cursor.
 * @property {number}  [lerpFactor=0.2]    - Interpolation factor (0..1) for easing motion/scale.
 * @property {string}  [className='absolute inset-0 z-0 pointer-events-none'] - Classes applied to canvas.
 */

// ------------------------------ Component -------------------------------------
export default function DottedOverlay({
  spacing = 24,
  baseRadius = 1.2,
  color = "rgba(253,243,232,0.35)",
  scaleNear = 2,
  lerpFactor = 0.2,
  className = "absolute inset-0 z-0 pointer-events-none",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const ctx = canvas.getContext("2d");
    const signs = [];
    let cols = 0;
    let rows = 0;
    let frameId;
    let mouse = { x: 0, y: 0 };
    let mouseOver = false;

    // --- Dot primitive ---
    class Dot {
      constructor() {
        this.x = 0; // animated offset x
        this.y = 0; // animated offset y
        this.tx = 0; // target offset x
        this.ty = 0; // target offset y
        this.scale = 1; // animated scale
        this.ts = 1; // target scale
        this.top = 0; // base center y
        this.left = 0; // base center x
        this.r = baseRadius; // radius
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.left + this.x, this.top + this.y);
        ctx.scale(this.scale, this.scale);
        ctx.fillStyle = color;
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }

    // --- Layout / DPR sizing ---
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(1, Math.floor(rect.width / spacing));
      rows = Math.max(1, Math.floor(rect.height / spacing));

      // Center the grid within the container
      const startX = ((rect.width % spacing) / 2) + spacing / 2;
      const startY = ((rect.height % spacing) / 2) + spacing / 2;

      for (let i = 0; i < cols; i++) {
        if (!signs[i]) signs[i] = [];
        for (let j = 0; j < rows; j++) {
          if (!signs[i][j]) signs[i][j] = new Dot();
          const sign = signs[i][j];
          sign.left = startX + i * spacing;
          sign.top = startY + j * spacing;
          sign.r = baseRadius;
        }
        if (signs[i].length > rows) signs[i].length = rows;
      }
      if (signs.length > cols) signs.length = cols;
    };

    // --- Pointer handling (attached to container; canvas is pointer-events: none) ---
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouseOver =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;
    };

    const onEnter = () => (mouseOver = true);
    const onLeave = () => {
      mouseOver = false;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const s = signs[i][j];
          if (!s) continue;
          s.ts = 1;
          s.tx = 0;
          s.ty = 0;
        }
      }
    };

    // --- Animation helpers ---
    const lerp = (a, b, t) => a + (b - a) * t;

    const calculateTargets = () => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const sign = signs[i][j];
          const hypBase = spacing / 2;
          const ax = mouse.x - sign.left;
          const ay = mouse.y - sign.top;
          const d = Math.hypot(ax, ay) || 1;
          const angle = Math.atan2(ay, ax);

          let hyp = hypBase;
          if (d < hypBase + sign.r) {
            hyp = d;
            sign.ts = scaleNear;
          } else {
            sign.ts = 1;
          }
          sign.tx = Math.cos(angle) * hyp;
          sign.ty = Math.sin(angle) * hyp;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mouseOver) calculateTargets();
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const s = signs[i][j];
          s.x = lerp(s.x, s.tx, lerpFactor);
          s.y = lerp(s.y, s.ty, lerpFactor);
          s.scale = lerp(s.scale, s.ts, lerpFactor);
          s.draw();
        }
      }
      frameId = requestAnimationFrame(draw);
    };

    // --- Wire up observers & events ---
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("touchmove", onMove, { passive: true });
    container.addEventListener("mouseenter", onEnter, { passive: true });
    container.addEventListener("mouseleave", onLeave, { passive: true });
    container.addEventListener("touchstart", onEnter, { passive: true });
    container.addEventListener("touchend", onLeave, { passive: true });

    frameId = requestAnimationFrame(draw);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("touchmove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("touchstart", onEnter);
      container.removeEventListener("touchend", onLeave);
    };
  }, [baseRadius, color, lerpFactor, scaleNear, spacing]);

  // ------------------------------ Render --------------------------------------
  // NOTE: Markup & className preserved; the canvas paints the dotted overlay.
  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

// Keep displayName for better DevTools
DottedOverlay.displayName = "DottedOverlay";

/*
  Dev notes:
  - Canvas is DPI-aware (DPR capped at 2 for perf) and resizes to its parent via ResizeObserver.
  - Events are attached to the container to keep the canvas pointer-events: none.
  - Tuning tips (non-breaking): increase spacing for fewer dots, lower lerpFactor for snappier motion,
    or tweak scaleNear for a stronger “react-to-cursor” emphasis.
*/
