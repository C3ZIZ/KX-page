import React from "react";
import Footer from "../../../components/Footer";
import ProductHero from "../components/ProductHero";
import AboutProductSection from "../components/AboutProductSection";
import Stakeholders from "../components/Stakeholders";
import Advances from "../components/Advances";

function Kore({ pageTitle = "Kore" }) {
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

      {/* Stakeholders section (use component DEFAULT_CARDS) */}
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

export default Kore;
