// src/components/Navbar.jsx
// Purpose: Top navigation bar with brand, primary links, and two SVG CTA buttons.
// Notes: keeps layout/styling intact; only structure/organization + comments.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling imports last
import contactBtn from "../assets/buttons/ContactUsButton.svg";
import kxBtn from "../assets/buttons/KxAcademyButton.svg";

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
const LINKS = [
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "products", label: "Products" },
  { key: "impact", label: "Impact" },
];

const OUTLINE_GRAD =
  "linear-gradient(94deg, #071A2C 24.12%, #FA7C0B 95.13%)";
const INNER_BG =
  "linear-gradient(94deg, rgba(23, 13, 2, 0.57) 4.87%, #071A2C 75.88%)";
const BORDER_COLOR = "#071A2C";

/**
 * @typedef {Object} NavbarProps
 * @property {"about"|"services"|"products"|"impact"} [active="about"] - Active link key.
 */

// Optional: PropTypes for JS projects (or TS types if you prefer)
// Navbar.propTypes = { ... }

// ------------------------------ Component -------------------------------------
function Navbar({ active = "about" }) {
  // --- Refs (DOM or instance) ---
  // (none)

  // --- State (primitive first, complex later) ---
  // (none)

  // --- Derived values (useMemo for expensive work) ---
  // (none)

  // --- Callbacks (stable handlers for children/antd) ---
  // (none)

  // --- Effects (subscribe/unsubscribe, focus, synchs) ---
  // (none)

  // ------------------------------ Render --------------------------------------
  // NOTE: JSX markup & classNames are preserved; only organized in the code file.
  return (
    <div className="w-[1204px]">
      {/* Border/Nav gradient outline */}
      <div className="rounded-[40px] p-[1px]" style={{ background: OUTLINE_GRAD }}>
        {/* Inner: exact height/padding, blur, solid border, Gredeint/01 bg */}
        <div
          className="rounded-[40px] h-[76px] pt-5 pb-[18px] px-9 flex items-center justify-between backdrop-blur-[2px]"
          style={{ border: `1px solid ${BORDER_COLOR}`, background: INNER_BG }}
        >
          {/* Brand */}
          <div className="text-[23px] leading-[1.4] font-semibold text-[#FDF3E8] font-['IBM Plex Sans']">
            Knowledgex
          </div>

          {/* Links */}
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {LINKS.map((l) => {
                const isActive = active === l.key;
                return (
                  <li key={l.key}>
                    <a
                      href="#"
                      className={[
                        "text-[15px] leading-none transition-colors font-['IBM Plex Sans']",
                        isActive
                          ? "text-[#FA7C0B] font-semibold"
                          : "text-white/70 hover:text-white/90 font-light",
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right CTAs (SVGs only) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              aria-label="Contact us"
              title="Contact us"
              className="cursor-pointer inline-flex"
            >
              <img src={contactBtn} alt="" className="h-10 w-auto select-none" />
              <span className="sr-only">Contact us</span>
            </a>

            <a
              href="#academy"
              aria-label="KX Academy"
              title="KX Academy"
              className="cursor-pointer inline-flex"
            >
              <img src={kxBtn} alt="" className="h-10 w-auto select-none" />
              <span className="sr-only">KX Academy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep displayName for better DevTools
Navbar.displayName = "Navbar";

// Export memoized if props are stable; no layout impact.
export default React.memo(Navbar);
