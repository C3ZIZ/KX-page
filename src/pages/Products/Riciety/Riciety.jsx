import React from 'react'
import Hero from './Hero'
import Footer from '../../../components/Footer'
import AboutProductSection from './AboutProductSection'
import Stakeholders from './stakeholders'
import Advances from './Advances'

function Riciety({ pageTitle = "Riciety" }) {
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <Hero pageTitle={pageTitle} />

      {/* About product section (below the hero) */}
      <AboutProductSection
        createdAt="2023"
        title={'Riciety is a white-label digital platform designed for universities, investors, and donors who want to maximize academic research impact.'}
        paragraphs={[
          "It empowers Technology Transfer Offices (TTOs) to manage research challenges, engage alumni and industrial partners, and secure funding through donations, investments, and collaborations.",
          "For investors and donors, Riciety provides instant access to a curated pipeline of impactful research opportunities, open visibility in monitoring progress, quantifiable economic and social returns, and assurance every investment produces innovation with purpose and value."
        ]}
        statNumber="10.203"
        statLabel="Number of users"
      />

      {/* Stakeholders section (use component DEFAULT_CARDS) */}
      <Stakeholders />

  {/* Advances section: how Riciety advances open research */}
  <Advances />

      <Footer />
    </div>
  )
}

export default Riciety
