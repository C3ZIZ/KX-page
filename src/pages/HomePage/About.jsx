// About.jsx
// Purpose: “About” hero section with floating decorative images and mission text.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import floatImage1 from "../../assets/float-image-1.svg";
import floatImage2 from "../../assets/float-image-2.svg";
import floatImage3 from "../../assets/float-image-3.svg";
import floatImage4 from "../../assets/float-image-4.svg";

// ------------------------------ Constants & Types ------------------------------
// (none)

/**
 * @typedef {Object} Props
 * // This component currently takes no props.
 */

// ------------------------------ Component -------------------------------------
function About() {
  // --- Refs / State / Derived values / Callbacks / Effects ---
  // (none needed: static presentational section)

  // ------------------------------ Render --------------------------------------
  return (
    <section className="bg-[#071C2F] w-full  p-14 py-60 pb-70 relative z-10">
      {/* Floating decorative images (absolute-positioned) */}
      <img className="absolute right-0 top-[20%]" src={floatImage1} alt="" />
      <img className="absolute right-[3.8%] bottom-[15%]" src={floatImage2} alt="" />
      <img className="absolute right-[40%] bottom-[5%] -z-1" src={floatImage3} alt="" />
      <img className="absolute right-[21.8%] bottom-[30%] -z-1" src={floatImage4} alt="" />

      {/* Content container */}
      <div className="max-w-4xl relative z-20">
        {/* Eyebrow: orange dot + label */}
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]"></span>
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">
            About
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 text-4xl/12 font-bold text-white">
          Knowledgex is an ecosystem builder that bridges research and entrepreneurship to
          turn ideas into scalable, deep-tech solutions for global challenges.
        </h2>

        {/* Subtext */}
        <p className="mt-10 text-4xl/13 text-white">
          Our mission is not only to assist researchers and entrepreneurs, but also
          to integrate academia, industry, investors, and government players into a
          successful deep-tech value chain.
        </p>
      </div>
    </section>
  );
}

// Keep displayName for better DevTools
About.displayName = "About";

// Export memoized (safe: no props/state, purely presentational)
export default React.memo(About);