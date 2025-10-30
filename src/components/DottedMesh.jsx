import React from "react";

export default function DottedMesh({ color = "#FFF", size = 2 }) {
  const GAP = 23;
  const dot = `radial-gradient(${withAlpha(color)} ${size}px, transparent ${size}px)`;

  return (
    <div
      aria-hidden
      role="presentation"
      className={`absolute inset-0 pointer-events-none`}
      style={{
        backgroundImage: dot,
        backgroundSize: `${GAP}px ${GAP}px`,
        backgroundPosition: "0 0",
      }}
    />
  );
}

/* --- tiny helper: add alpha to hex/rgb/hsl --- */
function withAlpha(c, a = 0.3) {
  const s = String(c).trim();
  if (s.startsWith("#")) {
    const { r, g, b } = hexToRgb(s);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  if (/^rgb/i.test(s) || /^hsl/i.test(s)) return s.replace(/\)$/, ` / ${a})`);
  return s; // named colors keep original opacity
}
function hexToRgb(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(v => v + v).join("");
  const n = parseInt(h.slice(0, 6), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
