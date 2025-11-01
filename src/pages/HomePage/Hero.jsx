// Hero.jsx
// Purpose: Home hero section with background image, site header, and CTA block.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import homeBackground from "../../assets/BG.svg";
import Header from "../../components/Header";
import HeroCTA from "./HeroCTA";

// ------------------------------ Constants & Types ------------------------------
const HOME_BG_STYLE = {
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

// ------------------------------ Component -------------------------------------
function Hero() {

  // ------------------------------ Render --------------------------------------
  return (
    <>
      <section
        className="relative w-full bg-no-repeat bg-cover pt-12"
        style={HOME_BG_STYLE}
        dir="ltr"
        role="banner"
        aria-label="القسم الرئيسي"
      >
        {/* Site header (no layout changes) */}
        <Header />

        {/* CTA block (no layout changes) */}
        <HeroCTA />
      </section>
    </>
  );
}

// Keep displayName for better DevTools
Hero.displayName = "Hero";

// Export memoized (safe: no props/state; purely presentational)
export default React.memo(Hero);
