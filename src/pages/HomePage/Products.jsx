// Products.jsx
// Purpose: “Products” section showcasing three product cards with images and a link icon.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import productImg1 from "../../assets/product-1-img.svg";
import productImg2 from "../../assets/product-2-img.svg";
import productImg3 from "../../assets/product-3-img.svg";
import directIcon from "../../assets/direct-icon.svg";

// ------------------------------ Constants & Types ------------------------------
// (none)

/**
 * @typedef {Object} Props
 * // This component currently takes no props.
 */

// ------------------------------ Component -------------------------------------
function Products() {


  // ------------------------------ Render --------------------------------------
  return (
    <section className="bg-[#071C2F] w-full  p-14 py-16 relative z-10">
      <div className="">
        {/* Eyebrow: orange dot + label */}
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]"></span>
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">
            Products
          </span>
        </div>

        {/* Heading + cards */}
        <div className="">
          <h2 className="mt-4 text-4xl/12 font-bold text-white">Our Innovation Platforms</h2>

          <div className="flex gap-4 mt-4 px-4 ">
            {/* Card 1 */}
            <div className="p-6 pt-20 relative rounded-4xl before:p-0.5! max-w-[380px] border-gradiant-no-bg transition-all">
              <div className="text-white relative z-10!">
                <h2 className="font-bold text-4xl">Riciety</h2>
                <h3 className="mt-2 text-3xl font-semibold">Open Research, Connected Futures</h3>
                <p className="mt-3 text-2xl">
                  An open platform redefining collaboration in academia across universities and disciplines.
                </p>
              </div>

              <div className="flex items-center justify-center px-2 mt-16 relative z-10!">
                <img src={productImg1} alt="" />
              </div>

              <div className="bg-[#E98214] p-3.5 border-16 border-white rounded-full w-max absolute -top-1 -right-1 z-100! cursor-pointer">
                <img
                  className="w-6 h-6 hover:translate-x-1 hover:-translate-y-1 transition-all"
                  src={directIcon}
                  alt=""
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 pt-20 rounded-4xl before:p-0.5! max-w-[380px] border-gradiant-no-bg ">
              <div className="text-white relative z-10!">
                <h2 className="font-bold text-4xl">Riciety</h2>
                <h3 className="mt-2 text-3xl font-semibold">Open Research, Connected Futures</h3>
                <p className="mt-3 text-2xl">
                  An open platform redefining collaboration in academia across universities and disciplines.
                </p>
              </div>

              <div className="flex items-center justify-center px-2 mt-16 relative z-10!">
                <img src={productImg2} alt="" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 pt-20 rounded-4xl before:p-0.5! max-w-[380px] border-gradiant-no-bg ">
              <div className="text-white relative z-10!">
                <h2 className="font-bold text-4xl">Riciety</h2>
                <h3 className="mt-2 text-3xl font-semibold">Open Research, Connected Futures</h3>
                <p className="mt-3 text-2xl">
                  An open platform redefining collaboration in academia across universities and disciplines.
                </p>
              </div>

              <div className="flex items-center justify-center px-2 mt-16 relative z-10!">
                <img src={productImg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep displayName for better DevTools
Products.displayName = "Products";

// Export memoized (safe: no props/state; purely presentational)
export default React.memo(Products);

