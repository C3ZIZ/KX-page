// Partnershops.jsx
// Purpose: Section showcasing “Partnershops” intro text and a FlipTabs demo.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import FlipTabs from "./FlipTabs";
import DottedOverlay from "../../components/DottedOverlay.jsx";

// ------------------------------ Constants & Types ------------------------------
// (none)

/**
 * @typedef {Object} Props
 * // This component currently takes no props.
 */

// ------------------------------ Component -------------------------------------
function Partnershops() {
  // --- Refs / State / Derived values / Callbacks / Effects ---
  // (none needed: purely presentational section wrapping FlipTabs)

  // ------------------------------ Render --------------------------------------
  return (
    <section className={` bg-[linear-gradient(195deg,#170D02_0%,#071A2C_70%)] w-full  p-14 py-16 relative z-10`}>
      {/* Decorative dotted mesh overlay */}
      <DottedOverlay />

      {/* Intro copy */}
      <div className="max-w-7xl ">
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]"></span>
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">
            Partnershops
          </span>
        </div>

        <h2 className="mt-4 text-4xl/12 font-bold text-white">From Discovery to Market</h2>

        <p className=" text-4xl/12 text-white z-10 ">
          Explore a preview of SPINx — a light version designed to
          show how we assess the commercial readiness of your research in minutes.
        </p>
      </div>

      {/* Interactive flip/expand tabs */}
      <div>
        <FlipTabs />
      </div>
    </section>
  );
}

// Keep displayName for better DevTools
Partnershops.displayName = "Partnershops";

// Export memoized (safe: no props/state; purely presentational)
export default React.memo(Partnershops);

