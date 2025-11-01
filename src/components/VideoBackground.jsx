// VideoBackground.jsx
// Purpose: Section with optional autoplaying background video (with poster fallback) and an overlay, rendering children on top.

import React, { useEffect, useRef, useState } from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
// (none)

// ------------------------------ Constants & Types ------------------------------
// IntersectionObserver options kept as a stable constant (no visual impact).
const OBSERVER_OPTIONS = { threshold: 0.25 };

/**
 * @typedef {Object} VideoBackgroundProps
 * @property {string}   [poster]                 - Poster image URL used as CSS background and <video> poster.
 * @property {string}   [webm]                   - WebM source URL (optional).
 * @property {string}   [mp4]                    - MP4 source URL (optional).
 * @property {string}   [className]              - Extra classes for the root <section>.
 * @property {string}   [ariaLabel]              - Accessible label for the banner region.
 * @property {React.ReactNode} [children]        - Content to render above the video/overlay.
 */

// ------------------------------ Component -------------------------------------
function VideoBackground({
  poster,
  webm,
  mp4,
  className = "",
  ariaLabel = "",
  children,
}) {
  // --- State ---
  const [enableVideo, setEnableVideo] = useState(false);

  // --- Refs ---
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // --- Derived (no side effects) ---
  const wrapperStyle = poster
    ? {
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  // --- Effects: gating & lazy-enable the video when in viewport ---
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    // Respect motion preferences and small screens
    if (prefersReducedMotion || isSmallScreen) {
      setEnableVideo(false);
      return;
    }

    const node = sectionRef.current;
    // If ref not ready, default to enabled (keeps original behavior)
    if (!node) {
      setEnableVideo(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEnableVideo(true);
        observer.disconnect();
      }
    }, OBSERVER_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // --- Effects: attempt autoplay once enabled ---
  useEffect(() => {
    if (!enableVideo || !videoRef.current) return;
    const vid = videoRef.current;
    const tryPlay = async () => {
      try {
        await vid.play();
      } catch {
        // Ignore autoplay failures (browser policy/user gesture)
      }
    };
    tryPlay();
  }, [enableVideo]);

  // ------------------------------ Render --------------------------------------
  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-no-repeat bg-cover overflow-hidden ${className}`}
      style={wrapperStyle}
      dir="ltr"
      role="banner"
      aria-label={ariaLabel}
    >
      {enableVideo && (
        <video
          ref={videoRef}
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(94deg, rgba(23, 13, 2, 0.35) 4.87%, rgba(7, 26, 44, 0.65) 75.88%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

// Keep displayName for better DevTools
VideoBackground.displayName = "VideoBackground";

// Export memoized (safe: props-driven presentational)
export default React.memo(VideoBackground);

