// Products.jsx
// Purpose: Products index page with hero and a 3-card grid linking to product detail pages.

import React from "react";
// 1) External libs first (react, router, antd, etc.)
import { Link } from "react-router-dom";
// 2) Internal/shared utilities next
// (none)
// 3) Local sibling/assets last
import ProductHero from "./components/ProductHero";
import Footer from "../../components/Footer";

// ------------------------------ Constants & Types ------------------------------
// Static list of product links (hoisted for stability)
const PRODUCTS = [
  { key: "riciety", name: "Riciety", to: "/products/riciety" },
  { key: "spinx", name: "SPINx", to: "/products/spinx" },
  { key: "kore", name: "Kore", to: "/products/kore" },
];

/**
 * @typedef {Object} ProductsProps
 * @property {string} [pageTitle='Our products'] - Title passed to the hero section.
 */

// ------------------------------ Component -------------------------------------
function Products({ pageTitle = "Our products" }) {
  // --- Refs / State / Derived values / Callbacks ---
  // (none needed: purely presentational page)

  // ------------------------------ Render --------------------------------------
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <ProductHero
        title={pageTitle}
        subtitle="Products description"
        description="We unlock the power of deep-tech together to create impact."
        buttonLabel="Contact us"
        buttonHref="#contact"
      />

      {/* Product links */}
      <section className="px-6 md:px-[68px] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Link
              key={p.key}
              to={p.to}
              className="rounded-3xl p-px bg-[linear-gradient(94deg,#071A2C_24.12%,#FA7C0B_95.13%)]"
            >
              <div className="rounded-3xl h-full bg-[linear-gradient(94deg,rgba(23,13,2,0.57)_4.87%,#071A2C_75.88%)] border border-[#071A2C] p-6 hover:opacity-95 transition">
                <div className="text-2xl font-semibold text-[#FDF3E8]">{p.name}</div>
                <div className="text-white/70 mt-2">View product</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Keep displayName for better DevTools
Products.displayName = "Products";

// Export memoized (safe: props-only page shell)
export default React.memo(Products);
