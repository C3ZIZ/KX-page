// Advances.jsx
// Purpose: Bulleted “Advances” section with optional nested sub-points and customizable bullet colors.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
// (none)

// ------------------------------ Constants & Types ------------------------------
// (none)

/**
 * @typedef {Object} AdvancesProps
 * @property {string}        [title]            - Section heading.
 * @property {Array<string|{text:string, subPoints?:string[]}>} [points]
 * @property {string}        [className]        - Extra classes for the section.
 * @property {string}        [titleClassName]   - Extra classes for the title.
 * @property {string}        [listClassName]    - Extra classes for the <ul>.
 * @property {string}        [bulletColor]      - CSS color for main bullets.
 * @property {string}        [subBulletColor]   - CSS color for sub bullets.
 */

// ------------------------------ Helpers ---------------------------------------
const isComplexPoint = (point) => typeof point === "object" && point?.text;

// ------------------------------ Component -------------------------------------
function Advances({
  title = "How This Product Advances Impact",
  points = [
    "Connects stakeholders across the value chain.",
    "Opens new channels for collaboration and delivery.",
    "Promotes transparency in progress and outcomes.",
    "Gives funders and partners clarity on where to act.",
  ],
  className = "",
  titleClassName = "",
  listClassName = "",
  bulletColor = "#FDF3E8",
  subBulletColor = "#FDF3E8",
}) {
  // --- Refs / State / Derived values / Callbacks ---
  // (none needed: purely presentational)

  // ------------------------------ Render --------------------------------------
  return (
    <section
      className={[
        "w-full",
        "flex flex-col",
        "min-h-[655px] md:h-[655px]",
        "px-[68px] py-[72px]",
        "gap-4",
        "bg-[#071C2F] antialiased",
        className,
      ].join(" ")}
    >
      <div className="w-full max-w-5xl">
        <h2
          className={[
            "w-full",
            'font-["IBM_Plex_Sans"] font-bold',
            "text-[32px] leading-[45px] md:text-[40px] md:leading-14",
            "text-[#FDF3E8]",
            titleClassName,
          ].join(" ")}
        >
          {title}
        </h2>

        <ul
          className={[
            "mt-6",
            "flex flex-col items-start",
            "gap-3.5",
            "w-full",
            listClassName,
          ].join(" ")}
        >
          {points.map((p, i) => {
            const complex = isComplexPoint(p);
            const text = complex ? p.text : p;
            const subPoints = complex ? p.subPoints : null;

            return (
              <li
                key={i}
                className={[
                  "relative pl-8",
                  "text-[#FDF3E8]/90",
                  "text-[18px] leading-8 md:text-[20px] md:leading-8",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: bulletColor }}
                />
                <div>
                  {text}
                  {subPoints && subPoints.length > 0 && (
                    <ul className="mt-2 ml-4 flex flex-col gap-2">
                      {subPoints.map((sub, subIdx) => (
                        <li
                          key={subIdx}
                          className="relative pl-6 text-[#FDF3E8]/80 text-[16px] md:text-[18px] leading-7"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: subBulletColor }}
                          />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// Keep displayName for better DevTools
Advances.displayName = "Advances";

// Export memoized (safe: props-only presentational)
export default React.memo(Advances);
