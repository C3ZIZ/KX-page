// src/components/Advances.jsx
import React from "react";

/**
 * Reusable "Advances" section
 * Props:
 * - title: string
 * - points: string[]
 * - className, titleClassName, listClassName: optional Tailwind overrides
 * - bulletColor: hex/string (default: Primary-50)
 */
export default function Advances({
  title = "How Riciety Advances Open Research",
  points = [
    "Builds bridges between researchers, institutions, and alumni.",
    "Opens new channels for collaboration and shared discovery.",
    "Promotes transparency in research progress and impact.",
    "Gives funders the insight to invest where it matters most.",
  ],
  className = "",
  titleClassName = "",
  listClassName = "",
  bulletColor = "#FDF3E8",
}) {
  return (
    <section
      className={[
        // Layout from Figma
        "w-full",
        "flex flex-col",
        "min-h-[655px] md:h-[655px]",
        "px-[68px] py-[72px]",
        "gap-4", // 16px
        // Eye comfort: dark bg, soft text, limited line length
        "bg-[#071C2F] antialiased",
        className,
      ].join(" ")}
    >
      <div className="w-full max-w-5xl">
        <h2
          className={[
            "w-full",
            'font-["IBM_Plex_Sans"] font-bold',
            "text-[32px] leading-[45px] md:text-[40px] md:leading-[56px]",
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
            "gap-[14px]",
            "w-full",
            listClassName,
          ].join(" ")}
        >
          {points.map((p, i) => (
            <li
              key={i}
              className={[
                "relative pl-8",
                // Eye comfort: slightly softer body text, relaxed leading
                "text-[#FDF3E8]/90",
                "text-[18px] leading-8 md:text-[20px] md:leading-8",
              ].join(" ")}
            >
              <span
                aria-hidden
                className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: bulletColor }}
              />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
