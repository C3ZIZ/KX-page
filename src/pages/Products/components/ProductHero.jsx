// ProductHero.jsx
// Purpose: Product page hero with background image, centered navbar, and CTA block.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import homeBackground from "../../../assets/bg2.svg";
import Navbar from "../../../components/Navbar";
import landingWebm from "../../../assets/videos/LandingpageKx.webm";
import landingMp4 from "../../../assets/videos/LandingpageKx.mp4";
import VideoBackground from "../../../components/VideoBackground";

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
const HOME_BG_STYLE = {
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

/**
 * @typedef {Object} ProductHeroProps
 * @property {string} [title="Product Title"]        - Main headline.
 * @property {string} [subtitle="Product Tagline"]   - Optional subheading.
 * @property {string} [description="Short description goes here."] - Optional description.
 * @property {string} [buttonLabel="Learn More"]     - CTA button label (omit to hide).
 * @property {string} [buttonHref="#"]               - CTA link href.
 */

// ------------------------------ Component -------------------------------------
function ProductHero({
  title = "Product Title",
  subtitle = "Product Tagline",
  description = "Short description goes here.",
  buttonLabel = "Learn More",
  buttonHref = "#",
}) {
  // --- Refs / State / Derived values / Callbacks ---
  // (none needed: presentational component)

  // ------------------------------ Render --------------------------------------
  return (
   <VideoBackground poster={homeBackground} webm={landingWebm} mp4={landingMp4} ariaLabel="Product hero">
      {/* Center the navbar to match its fixed width */}
      <div className="w-full flex justify-center pt-12">
        <Navbar active="products" />
      </div>

      {/* CTA */}
      <div dir="ltr" className="relative text-center py-56">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl text-white font-bold">{title}</h1>

          {subtitle && <h2 className="product-h2 mt-5">{subtitle}</h2>}

          {description && <h3 className="product-h3 my-5">{description}</h3>}

          {buttonLabel && (
            <a href={buttonHref}>
              <button className="product-button cursor-pointer border-gradiant mx-auto">
                {buttonLabel}
              </button>
            </a>
          )}
        </div>
      </div>
    </VideoBackground>
  );
}

// Keep displayName for better DevTools
ProductHero.displayName = "ProductHero";

// Export memoized (safe: props-only presentational)
export default React.memo(ProductHero);
