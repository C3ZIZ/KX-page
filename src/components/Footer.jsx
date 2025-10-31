// src/components/Footer.jsx
import React, { useState } from "react";
import footerBtn from "../assets/buttons/FooterButton.svg";
import twitterSvg from "../assets/twitter.svg";
import instagramSvg from "../assets/instagram.svg";
import linkedinSvg from "../assets/linkedin.svg";

const GRAD02 =
  "linear-gradient(218deg, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)";
const BG_DARK = "#170D02";

export default function Footer({
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
  fullBleed = true, // <<< make the footer stretch to viewport width by default
}) {
  const [email, setEmail] = useState("");

  return (
    <footer className={`w-full ${className}`} aria-label="Site footer">
      {/* If inside a centered/narrow parent, this forces full viewport width */}
      <div
        className={
          fullBleed
            ? "w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            : "w-full"
        }
      >
        {/* 1px gradient border spanning full width */}
        <div className="rounded-none p-[1px]" style={{ background: GRAD02 }}>
          {/* canvas */}
          <div
            className="rounded-none box-border px-[72px] py-10"
            style={{ background: BG_DARK }}
          >
            {/* top row */}
            <div className="flex flex-wrap items-start justify-between gap-10">
              {/* left block */}
              <div className="max-w-[640px]">
                <h3 className="text-white font-bold leading-[1.4] text-[33px] font-['IBM Plex Sans']">
                  {brand}
                </h3>
                <p className="mt-5 text-white leading-[1.4] text-[16px] font-['IBM Plex Sans']">
                  {tagline}
                </p>

                {/* newsletter */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubscribe?.(email);
                  }}
                  className="mt-6 flex items-center gap-3"
                  noValidate
                >
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
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your E-mail for updates on our latest innovations"
                      className="w-full h-full bg-transparent outline-none placeholder:text-[#888D93] text-[#170D02] text-[14px]"
                    />
                  </label>

                  {/* Subscribe button (your SVG only) */}
                  <button
                    type="submit"
                    className="inline-flex h-[52px] w-[168px] items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
                    aria-label="Subscribe"
                    title="Subscribe"
                  >
                    <img src={footerBtn} alt="" className="h-full w-full select-none" />
                    <span className="sr-only">Subscribe</span>
                  </button>
                </form>

                {/* gradient divider */}
                <div
                  className="mt-6 h-px w-[620px] max-w-full rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, #9DE8EE 0%, #FA7C0B 50%, #9F8CED 100%)",
                  }}
                />
              </div>

              {/* right columns */}
              <div className="flex gap-16 pt-2">
                <Column title="Quick Links" items={quickLinks} />
                <Column title="Platforms" items={platforms} />
              </div>
            </div>

            {/* bottom row */}
            <div className="mt-8 flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-white">Follow us</span>
                <a href="https://x.com/KnowledgeX_SA" aria-label="Twitter" title="Twitter" className="cursor-pointer">
                  <img src={twitterSvg} alt="" className="h-10 w-10" />
                </a>
                <a href="https://www.instagram.com/knowledgex_sa/" aria-label="Instagram" title="Instagram" className="cursor-pointer">
                  <img src={instagramSvg} alt="" className="h-10 w-10" />
                </a>
                <a href="https://www.linkedin.com/company/knowledgex-sa" aria-label="LinkedIn" title="LinkedIn" className="cursor-pointer">
                  <img src={linkedinSvg} alt="" className="h-10 w-10" />
                </a>
              </div>

              <p className="text-white text-sm">
                © {startYear}-{endYear}. {brand}. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
