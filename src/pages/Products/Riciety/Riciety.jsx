import React from 'react'
import Footer from '../../../components/Footer'
import ProductHero from '../components/ProductHero'
import AboutProductSection from '../components/AboutProductSection'
import Stakeholders from '../components/Stakeholders'
import Advances from '../components/Advances'

function Riciety({ pageTitle = "Riciety" }) {
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <ProductHero
        title={pageTitle}
        subtitle="Open Research Platform"
        description="An open platform redefining collaboration in academia across universities and disciplines."
        buttonLabel="Join Now"
        buttonHref="#"
      />

      {/* About product section (below the hero) */}
      <AboutProductSection
        createdAt="2023"
        title={'Riciety is a white-label digital platform designed for universities, investors, and donors who want to maximize academic research impact.'}
        paragraphs={[
          "It empowers Technology Transfer Offices (TTOs) to manage research challenges, engage alumni and industrial partners, and secure funding through donations, investments, and collaborations.",
          "For investors and donors, Riciety provides instant access to a curated pipeline of impactful research opportunities, open visibility in monitoring progress, quantifiable economic and social returns, and assurance every investment produces innovation with purpose and value."
        ]}
        statNumber="10,000+"
        statLabel="Number of users"
      />

      {/* Stakeholders section */}
      <Stakeholders
        cards={[
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
        ]}
      />

  {/* Advances section: how Riciety advances open research */}
  <Advances 
    title="How Riciety Advances Open Research"
    points={[
      "Builds bridges between researchers, institutions, and alumni.",
      "Opens new channels for collaboration and shared discovery.",
      "Promotes transparency in research progress and impact.",
      "Gives funders the insight to invest where it matters most.",
    ]}
  />

      <Footer />
    </div>
  )
}

export default Riciety
