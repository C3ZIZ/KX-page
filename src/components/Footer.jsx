// src/components/Footer.jsx
// Purpose: Site footer with brand, newsletter subscribe, link columns, and social icons.

import React, { useState, useCallback } from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling imports last
import twitterSvg from "../assets/twitter.svg";
import instagramSvg from "../assets/instagram.svg";
import linkedinSvg from "../assets/linkedin.svg";

// ------------------------------ Constants & Types ------------------------------
// Keep constants near top; name in ALL_CAPS if static.
const GRAD02 =
  "linear-gradient(218deg, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)"; // (unused here, kept for design parity)
const BG_DARK = "#170D02";

/**
 * @typedef {Object} FooterProps
 * @property {string}   brand        - Brand name shown as the footer heading.
 * @property {string}   tagline      - Short description below the brand.
 * @property {Array<{label:string,href:string}>} quickLinks - Left column links.
 * @property {Array<{label:string,href:string}>} platforms  - Right column links.
 * @property {number}   startYear    - Copyright start year.
 * @property {number}   endYear      - Copyright end year.
 * @property {Function} onSubscribe  - Callback when user submits newsletter email.
 * @property {string}   className    - Optional extra classes for the root footer.
 */

// ------------------------------ Component -------------------------------------
function Footer({
  brand = "Knowledgex",
  tagline = "Driving deep-tech innovation across the entire value chain: Academia, Industry, Investors",
  quickLinks = [
    { label: "How it works", href: "#" },
    { label: "Featured", href: "#" },
    { label: "Partnership", href: "#" },
    { label: "Business Relation", href: "#" },
  ],
  platforms = [
    { label: "Events", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "Invite a friend", href: "#" },
  ],
  startYear = 2025,
  endYear = 2026,
  onSubscribe,
  className = "",
}) {
  // --- State (primitive first, complex later) ---
  const [email, setEmail] = useState("");

  // --- Callbacks (stable handlers for children/antd) ---
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleSubscribe = useCallback(
    (e) => {
      e.preventDefault();
      onSubscribe?.(email);
    },
    [onSubscribe, email]
  );

  // ------------------------------ Render --------------------------------------
  // NOTE: JSX markup & classNames are preserved; only reordered/organized in the code file.
  return (
    <footer className={`w-full ${className} border-gradiant-no-bg`} aria-label="Site footer">
      {/* canvas */}
      <div className="rounded-none box-border px-[72px] py-10 " style={{ background: BG_DARK }}>
        {/* top row */}
        <div className="flex flex-wrap items-start justify-between gap-10 relative z-10">
          {/* left block */}
          <div className="max-w-[640px]">
            <h3 className="text-white font-bold leading-[1.4] text-[33px] font-['IBM Plex Sans']">
              {brand}
            </h3>
            <p className="mt-5 text-white leading-[1.4] max-w-[30ch] text-[16px] font-['IBM Plex Sans']">
              {tagline}
            </p>

            {/* newsletter */}
            <form onSubmit={handleSubscribe} className="mt-12 flex items-center gap-3" noValidate>
              {/* input pill */}
              <label
                htmlFor="footer-email"
                className="flex items-center gap-3 rounded-full h-[52px] min-w-[320px] w-[520px] bg-[#FDF3E8] pl-5 pr-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 0l8 6 8-6"
                    stroke="#888D93"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your E-mail for updates on our latest innovations"
                  className="w-full h-full bg-transparent outline-none placeholder:text[#888D93] text-[#170D02] text-[14px]"
                />
              </label>

              {/* Subscribe button (your SVG only) */}
              <button
                type="submit"
                className="cursor-pointer px-5 py-3.5 text-white border-gradiant"
                aria-label="Subscribe"
                title="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* right columns */}
          <div className="flex gap-16 pt-2">
            <Column title="Quick Links" items={quickLinks} />
            <Column title="Platforms" items={platforms} />
          </div>

          {/* gradient divider */}
          <div
            className="h-px w-full -mt-4 rounded"
            style={{
              background: "linear-gradient(90deg, #9DE8EE 0%, #FA7C0B 50%, #9F8CED 100%)",
            }}
          />
        </div>

        {/* bottom row */}
        <div className="mt-4 flex w-full items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <span className="text-white">Follow us</span>
            <a
              href="https://x.com/KnowledgeX_SA"
              aria-label="Twitter"
              title="Twitter"
              className="cursor-pointer"
            >
              <img src={twitterSvg} alt="" className="h-10 w-10" />
            </a>
            <a
              href="https://www.instagram.com/knowledgex_sa/"
              aria-label="Instagram"
              title="Instagram"
              className="cursor-pointer"
            >
              <img src={instagramSvg} alt="" className="h-10 w-10" />
            </a>
            <a
              href="https://www.linkedin.com/company/knowledgex-sa"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="cursor-pointer"
            >
              <img src={linkedinSvg} alt="" className="h-10 w-10" />
            </a>
          </div>

          <p className="text-white text-sm">
            © {startYear}-{endYear}. {brand}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------ Subcomponents ---------------------------------
function Column({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-4">
        {items.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Keep displayName for better DevTools
Footer.displayName = "Footer";
Column.displayName = "Footer.Column";

// Export memoized (safe: props-driven presentational component)
export default React.memo(Footer);

