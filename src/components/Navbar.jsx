// src/components/Navbar.jsx
import React from "react";
import contactBtn from "../assets/buttons/ContactUsButton.svg";
import kxBtn from "../assets/buttons/KxAcademyButton.svg";

const LINKS = [
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "products", label: "Products" },
  { key: "impact", label: "Impact" },
];

export default function Navbar({ active = "about" }) {
  return (
    <div className="w-[1204px]">
      {/* Border/Nav gradient outline */}
      <div
        className="rounded-[40px] p-[1px]"
        style={{
          background:
            "linear-gradient(94deg, #071A2C 24.12%, #FA7C0B 95.13%)",
        }}
      >
        {/* Inner: exact height/padding, blur, solid border, Gredeint/01 bg */}
        <div
          className="rounded-[40px] h-[76px] pt-5 pb-[18px] px-9 flex items-center justify-between backdrop-blur-[2px]"
          style={{
            border: "1px solid #071A2C",
            background:
              "linear-gradient(94deg, rgba(23, 13, 2, 0.57) 4.87%, #071A2C 75.88%)",
          }}
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
              <img
                src={contactBtn}
                alt=""
                className="h-10 w-auto select-none"
              />
              <span className="sr-only">Contact us</span>
            </a>

            <a
              href="#academy"
              aria-label="KX Academy"
              title="KX Academy"
              className="cursor-pointer inline-flex"
            >
              <img
                src={kxBtn}
                alt=""
                className="h-10 w-auto select-none"
              />
              <span className="sr-only">KX Academy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
