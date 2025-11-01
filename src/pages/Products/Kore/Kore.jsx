// Kore.jsx
// Purpose: Product landing page for "Kore" combining hero, about, stakeholders, advances, and footer sections.

import React from "react";
// 1) External libs first (react, router, antd, etc.)

// 2) Internal/shared utilities next
// (none)

// 3) Local sibling/assets last
import Footer from "../../../components/Footer";
import ProductHero from "../components/ProductHero";
import AboutProductSection from "../components/AboutProductSection";
import Stakeholders from "../components/Stakeholders";
import Advances from "../components/Advances";

// ------------------------------ Constants & Types ------------------------------
// (none)

/**
 * @typedef {Object} KoreProps
 * @property {string} [pageTitle='Kore'] - Title passed to the hero section.
 */

// ------------------------------ Component -------------------------------------
function Kore({ pageTitle = "Kore" }) {
  // --- Refs / State / Derived values / Callbacks ---
  // (none needed: page comp poses child sections)

  // ------------------------------ Render --------------------------------------
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <ProductHero
        title={pageTitle}
        subtitle="The Science Behind Great Teams"
        description="A research-backed assessment aligning people, purpose, and performance."
        buttonLabel="Try Now"
        buttonHref="#"
      />

      {/* About product section (below the hero) */}
      <AboutProductSection
        createdAt="2023"
        title={
          "KORE is a research-backed assessment designed to empower individuals, startups, and innovation-driven institutions to build aligned, high-performing founding teams through validated psychometric and behavioral science."
        }
        paragraphs={[
          "It helps founders, accelerators, and investors understand the human dynamics behind startup success—ensuring teams are aligned in vision, roles, and execution from day one.",
        ]}
        statNumber="2,400+"
        statLabel="Number of users"
      />

      {/* Stakeholders section */}
      <Stakeholders
        cards={[
          {
            title: "For Founders",
            points: [
              "Build complementary founding teams.",
              "Clarify roles and strengths.",
              "Avoid early misalignments",
            ],
          },
          {
            title: "For Accelerators & Labs",
            points: [
              "Evaluate team synergy and readiness.",
              "Identify capability gaps early.",
              "Support teams with data-backed insights.",
            ],
          },
          {
            title: "For VCs & Innovation Units",
            points: [
              "Screen founding teams before investing.",
              "Predict alignment and performance.",
              "Reduce risk and strengthen portfolios.",
            ],
          },
        ]}
      />

      {/* Advances section: how Kore advances its domain */}
      <Advances
        title="How KORE Builds Alignment"
        points={[
          "Reveals overlaps, gaps, and blind spots.",
          "Clarifies natural roles within teams.",
          "Visualizes compatibility and team fit.",
          "Supports smart, balanced team formation.",
        ]}
      />

      <Footer />
    </div>
  );
}

// Keep displayName for better DevTools
Kore.displayName = "Kore";

// Export memoized (safe: props-only page shell)
export default React.memo(Kore);

