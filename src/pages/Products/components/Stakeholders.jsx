import React from "react";
import DottedOverlay from "../../../components/DottedOverlay.jsx";

export const StakeholderCard = ({
  title,
  points = [],
  className = "",
  titleClassName = "",
  listClassName = "",
  density = "comfortable",
}) => {
  const styles = {
    compact: {
      minH: "min-h-[400px]",
      pad: "pt-5 pr-6 pb-6 pl-6 md:pt-6",
      title: "text-[20px] leading-7",
      bullets: "text-[16px] leading-6 space-y-2",
    },
    comfortable: {
      minH: "min-h-[468px] md:min-h-[490px] lg:min-h-[511px]",
      pad: "pt-8 pr-8 pb-8 pl-6 md:pt-10 md:pr-10 md:pb-10 md:pl-6 lg:pt-[68px] lg:pr-[68px] lg:pb-[68px] lg:pl-6",
      title: "text-[22px] md:text-[24px] lg:text-[28px] leading-[1.4]",
      bullets: "text-[17px] md:text-[18px] lg:text-[20px] leading-[1.6] space-y-3 md:space-y-4",
    },
    spacious: {
      minH: "min-h-[520px] md:min-h-[560px]",
      pad: "pt-10 pr-10 pb-10 pl-6 lg:pt-[72px] lg:pr-[72px] lg:pb-[72px] lg:pl-6",
      title: "text-[24px] md:text-[26px] lg:text-[28px] leading-[1.45]",
      bullets: "text-[18px] md:text-[20px] lg:text-[22px] leading-[1.7] space-y-4 md:space-y-5",
    },
  }[density] ?? styles?.comfortable;

  return (
    <article
      className={[
        "flex flex-col items-start",
        "w-full md:w-[377px]",
        styles.minH,
        styles.pad,
        "rounded-[40px] card-border-colors",
        "bg-[linear-gradient(94deg,rgba(23,13,2,0.57)_4.87%,#071A2C_75.88%)]",
        className,
      ].join(" ")}
    >
      <h3
        className={[
          "text-[#FDF3E8]",
          'font-["IBM_Plex_Sans"] font-bold',
          styles.title,
          titleClassName,
        ].join(" ")}
      >
        {title}
      </h3>

      <ul
        className={[
          "w-full text-left list-disc pl-6 mt-8",
          "text-[#FDF3E8] marker:text-[#FDF3E8]/90",
          'font-["IBM_Plex_Sans"] font-normal',
          styles.bullets,
          listClassName,
        ].join(" ")}
      >
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </article>
  );
};

const DEFAULT_CARDS = [
  {
    title: "For Universities",
    points: [
      "Showcase active research.",
      "Attract partners and funding.",
      "Boost innovation reputation.",
    ],
  },
  {
    title: "For Researchers",
    points: [
      "Connect across institutions.",
      "Collaborate with peers and alumni.",
      "Gain visibility for your work.",
    ],
  },
  {
    title: "For Donors and Investors",
    points: [
      "See real opportunities early.",
      "Fund impactful research.",
      "Support innovation growth.",
    ],
  },
];

export default function Stakeholders({ cards = DEFAULT_CARDS, className = "" }) {
  return (
    <section
      aria-label="Stakeholders"
      className={[
        "w-full",
        "relative",
        "min-h-[840px]",
        "flex items-center justify-center",
        "gap-6",
        "py-14 px-6 md:px-[68px]",
        "bg-[linear-gradient(94deg,rgba(23,13,2,0.57)_4.87%,#071A2C_75.88%)]",
        className,
      ].join(" ")}
    >
      <DottedOverlay />

      <div className="relative z-10 flex flex-wrap md:flex-nowrap items-stretch md:justify-between justify-center gap-6">
        {cards.map((c, idx) => (
          <StakeholderCard key={idx} title={c.title} points={c.points} />
        ))}
      </div>
    </section>
  );
}
