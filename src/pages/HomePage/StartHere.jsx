// src/components/StartHere.jsx
// Purpose: “Start Here” section with title, subtitle, tri-field form (name, email, file upload), and a CTA.
// Notes: keeps layout/styling intact; only structure/organization + comments. Filename/size shown + working delete.

import React, { useRef, useState, useCallback } from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling imports last
import uploadIcon from "../../assets/upload-icon.svg"

// ------------------------------ Constants & Types ------------------------------
const FORM_ACTION = "https://formspree.io/f/xanldyjo";

/**
 * @typedef {Object} StartHereProps
 * @property {string} [formAction] - Endpoint to submit the form to.
 * @property {string} [className]  - Optional extra className for the root <section>.
 */

// ------------------------------ Helpers ---------------------------------------
const formatBytes = (bytes) => {
  if (!Number.isFinite(bytes)) return "";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024; i++;
  }
  return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
};

// ------------------------------ Component -------------------------------------
function StartHere({ formAction = FORM_ACTION, className = "" }) {
  // --- Refs ---
  const fileInputRef = useRef(null);

  // --- State ---
  const [file, setFile] = useState(null);

  // --- Callbacks ---
  const handleFileChange = useCallback((e) => {
    const f = e.target.files?.[0];
    setFile(f ?? null);
  }, []);

  // Open the native file picker (we control it; no <label htmlFor> needed)
  const openFileDialog = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  }, []);

  const clearFile = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (fileInputRef.current) fileInputRef.current.value = "";
    setFile(null);
  }, []);

  const onKeyActivate = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") openFileDialog(e);
  }, [openFileDialog]);

  // ------------------------------ Render --------------------------------------
  return (
    <section className={`bg-[#071C2F] w-full p-14 py-16 relative z-10 ${className}`}>
      <div className="max-w-7xl ">
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]" />
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">
            Start Here
          </span>
        </div>

        <h2 className="mt-4 text-4xl/12 font-bold text-white">From Discovery to Market</h2>

        <p className="mt-3 text-4xl/13 text-white z-10 ">
          Explore a preview of SPINx — a light version designed to show how we assess the commercial
          readiness of your research in minutes.
        </p>
      </div>

      <div>
        <div className="px-20 pt-16 pb-10 mt-40 rounded-[80px]! before:p-0.2! border-gradiant">
          <form
            action={formAction}
            method="POST"
            className="z-100! relative "
          >
            <div className=" relative z-100! flex flex-col md:flex-row items-center gap-3.5 p-6 rounded-lg text-white">
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="name" className="mb-1 ml-4 text-xl font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ahmed zahir"
                  className="px-4 py-2 rounded-full bg-[#fdf2e9] text-black focus:outline-none"
                />
              </div>
              <div className="h-12 -mb-6 border-l-2 border-l-[#F3B572]"/>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="email" className="mb-1 ml-4 text-xl font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@mail.com"
                  className="px-4 py-2 rounded-full bg-[#fdf2e9] text-black focus:outline-none"
                />
              </div>
              <div className="h-12 -mb-6 border-l-2 border-l-[#F3B572]"/>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1 ml-4 text-xl font-semibold">Your research abstract</label>

                {/* Upload trigger: button-like div to avoid label->input default behavior */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={openFileDialog}
                  onKeyDown={onKeyActivate}
                  aria-controls="abstract"
                  aria-label={file ? `Selected ${file.name}` : "Upload File"}
                  className="cursor-pointer bg-[#FA7C0B]! text-white  py-2 px-4 rounded-full flex items-center border-gradiant-no-bg"
                >
                  {file ? (
                    <div className="flex items-center justify-center">
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]">
                        
                        {file.name}
                      </span>
                      <span className="ml-2 opacity-90 text-sm">
                        ({formatBytes(file.size)})
                      </span>
                      <button
                        type="button"
                        onClick={clearFile}
                        className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition z-100! cursor-pointer"
                        aria-label="Remove selected file"
                        title="Remove file"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <span className="ml-2 flex gap-2">
                      <img src={uploadIcon} alt="" />
                      Upload File
                    </span>
                  )}
                </div>

                {/* Hidden native input (still participates in form submission) */}
                <input
                  ref={fileInputRef}
                  type="file"
                  id="abstract"
                  name="abstract"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {/* SR-only live region for screen readers */}
                <span className="sr-only" aria-live="polite">
                  {file ? `Selected ${file.name} size ${formatBytes(file.size)}` : "No file selected"}
                </span>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="text-white cursor-pointer px-6 py-2.5 border-3-gradiant" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-8">
          <button className="cursor-pointer text-xl! text-white px-8 py-3 border-gradiant">
            Explore more products
          </button>
        </div>
      </div>
    </section>
  );
}

// Keep displayName for better DevTools
StartHere.displayName = "StartHere";

export default React.memo(StartHere);
