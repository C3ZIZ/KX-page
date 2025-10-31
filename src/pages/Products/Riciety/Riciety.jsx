import React from 'react'
import Hero from './Hero'
import Footer from '../../../components/Footer'

function Riciety({ pageTitle = "Riciety" }) {
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <Hero pageTitle={pageTitle} />
      {/* Add more sections for Riciety here if needed */}
      <Footer />
    </div>
  )
}

export default Riciety
