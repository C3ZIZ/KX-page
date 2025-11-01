// Hero.jsx
// Purpose: Services hero with background image, centered navbar, and a CTA block that shows the page title.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import homeBackground from "../../assets/bg2.svg";
import Navbar from "../../components/Navbar";
import HeroCTA from "./HeroCTA";

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
const HOME_BG_STYLE = {
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

/**
 * @typedef {Object} HeroProps
 * @property {string} pageTitle - Title passed down to the CTA section.
 */

// ------------------------------ Component -------------------------------------
function Hero({ pageTitle }) {
  // --- Refs / State / Derived values / Callbacks ---
  // (none needed: presentational section)

  // ------------------------------ Render --------------------------------------
  return (
    <>
      <section
        className="relative w-full bg-no-repeat bg-cover overflow-hidden"
        style={HOME_BG_STYLE}
        dir="ltr"
        role="banner"
        aria-label="القسم الرئيسي"
      >
        {/* Center the navbar to match its fixed width */}
        <div className="w-full flex justify-center pt-12">
          <Navbar active="services" />
        </div>

        {/* CTA */}
        <HeroCTA title={pageTitle} />
      </section>
    </>
  );
}

// Keep displayName for better DevTools
Hero.displayName = "Hero";

// Export memoized (safe: props-only presentational)
export default React.memo(Hero);
