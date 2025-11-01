import React from 'react'
import Footer from '../../../components/Footer'
import ProductHero from '../components/ProductHero'
import AboutProductSection from '../components/AboutProductSection'
import Stakeholders from '../components/Stakeholders'
import Advances from '../components/Advances'

function Spinx({ pageTitle = "SPINx" }) {
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <ProductHero
        title={pageTitle}
        subtitle="From Research to Real-World Impact"
        description="A smart evaluation engine that transforms discoveries into viable ventures."
        buttonLabel="Try Now"
        buttonHref="#"
      />

      {/* About product section (below the hero) */}
      <AboutProductSection
        createdAt="2022"
        title={'SPINx is a smart platform that helps universities, researchers, and innovation teams evaluate the commercial potential of patents and research projects in minutes, not months. By combining real market data with private-sector indicators, SPINx delivers reliable feasibility insights and clear pathways for turning research into impact.'}
        paragraphs={[]}
        statNumber="3,600+"
        statLabel="Number of users"
      />

      {/* Stakeholders section */}
      <Stakeholders
        cards={[
          {
            title: "For Researchers",
            points: [
              "Assess the commercial potential of your work.",
              "Get data-driven insights in minutes.",
              "Identify the best route to market.",
            ],
          },
          {
            title: "For Innovation Teams & Investors",
            points: [
              "Access validated deep-tech opportunities.",
              "Benchmark projects with real-world data.",
              "Make faster, smarter investment decisions.",
            ],
          },
          {
            title: "For Universities & Research Institutes",
            points: [
              "Access validated deep-tech opportunities.",
              "Benchmark projects with real-world data.",
              "Make faster, smarter investment decisions.",
            ],
          },
        ]}
      />

      {/* Advances section: how SPINx advances its domain */}
      <Advances 
        title="How SPINx Accelerates Commercialization"
        points={[
          "Evaluates research feasibility instantly.",
          "Generates market-backed insights and benchmarks.",
          {
            text: "Recommends tailored commercialization pathways—",
            subPoints: [
              "Spinout creation",
              "Internal development",
              "Licensing opportunities"
            ]
          }
        ]}
      />

      <Footer />
    </div>
  )
}

export default Spinx
