// src/components/Header.jsx
// Purpose: Top navigation bar with brand, primary links, and two CTAs.
// Notes: keeps layout/styling intact; only structure/organization + comments.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling imports last
// (none)

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
const DEFAULT_LINKS = [
  { label: "About", href: "/" },
  { label: "Services", href: "/" },
  { label: "Products", href: "/" },
  { label: "Impact", href: "/" },
];

/**
 * @typedef {Object} HeaderProps
 * @property {string} brand           - Brand text in the left section.
 * @property {Array<{label:string,href:string}>} links - Exactly 4 nav links (About, Services, Products, Impact).
 * @property {string} ctaLabel        - Text for the primary CTA button.
 * @property {string} academyLabel    - Text for the secondary gradient CTA.
 */

// Optional: PropTypes for JS projects (or TS types if you prefer)
// Header.propTypes = { ... }

// ------------------------------ Component -------------------------------------
function Header({
  brand = "Knowledgex",
  links = DEFAULT_LINKS,
  ctaLabel = "Contact us",
  academyLabel = "KX Academy",
}) {
  // --- Refs (DOM or instance) ---
  // (none)

  // --- State (primitive first, complex later) ---
  // (none)

  // --- Derived values (useMemo for expensive work) ---
  const [about, services, products, impact] = links;

  // --- Callbacks (stable handlers for children/antd) ---
  // (none)

  // --- Effects (subscribe/unsubscribe, focus, synchs) ---
  // (none)

  // ------------------------------ Render --------------------------------------
  // NOTE: JSX markup & classNames preserved; only organized in file.
  return (
    <div className="mx-auto max-w-[90%]">
      <header className="rounded-full w-full h-[88px] flex items-center justify-between px-8 mx-auto border-2-gradiant">
        <div className="flex-1">
          <h2 className="text-white text-2xl font-semibold">{brand}</h2>
        </div>

        <div className="flex items-center justify-center gap-5 flex-1">
          <a className="text-white" href={about?.href || "/"}>{about?.label || "About"}</a>
          <a className="text-white" href={services?.href || "/"}>{services?.label || "Services"}</a>
          <a className="text-white" href={products?.href || "/"}>{products?.label || "Products"}</a>
          <a className="text-white" href={impact?.href || "/"}>{impact?.label || "Impact"}</a>
        </div>

        <div className="flex items-center justify-end gap-4 flex-1">
          <button className="cursor-pointer px-7 py-2.5 rounded-full text-white font-medium border-gradiant">
            {ctaLabel}
          </button>

          <div className="rounded-full p-[1.8px] max-w-max flex items-center justify-center bg-[linear-gradient(35deg,#ff8a2b_0%,#0b0f14_100%)] shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
            <button className="relative inline-flex items-center justify-center px-6 py-2 rounded-full text-white font-semibold bg-[linear-gradient(200deg,#8a3c1f_0%,#3a271d_45%,#000_100%)]">
              <span className="relative">{academyLabel}</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

// Keep displayName for better DevTools
Header.displayName = "Header";

// Export memoized if props are stable; no layout impact.
export default React.memo(Header);
