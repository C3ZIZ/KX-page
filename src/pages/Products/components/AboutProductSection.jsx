import React from "react";

export default function AboutProductSection({
  createdAt = "2024",
  title = "Product description title.",
  paragraphs = [
    "Explain your product in one or two sentences with a clear value proposition.",
    "Describe who benefits and the measurable impact.",
  ],
  statNumber = "0.000",
  statLabel = "Active users",
  className = "",
}) {
  return (
    <section className={`w-full bg-[#071C2F]`} aria-label="About product">
      <div
        className={`mx-auto max-w-[1440px] flex flex-col justify-end items-center gap-8 p-[68px] ${className}`}
      >
        {/* Created at */}
  <div className="h-20 flex flex-col justify-center self-stretch">
          <p className="text-[#EF9C43] font-normal text-[33px] leading-[46.2px] font-['IBM Plex Sans Arabic']">
            Created at {createdAt}
          </p>
        </div>

        {/* Title */}
        <h2 className="self-stretch text-[#FDF3E8] font-normal text-[40px] leading-14 font-['IBM Plex Sans Arabic']">
          {title}
        </h2>

        {/* Body */}
        <div className="self-stretch text-[#FDF3E8] font-extralight text-[33px] leading-[46.2px] font-['IBM Plex Sans Arabic'] min-h-[368px] space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Stat block */}
        <div className="self-end w-full sm:w-[559px] flex flex-col items-center gap-3.5 py-6 sm:translate-x-[68px]">
          <div className="text-[#EF9C43] font-semibold leading-none text-[72px] text-center">
            {statNumber}
          </div>
          <div
            className="h-[45px] self-stretch text-center font-['IBM Plex Sans'] text-[23px] font-bold leading-[140%]"
            style={{ color: 'var(--Primary-400, #EF9C43)' }}
          >
            {statLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
