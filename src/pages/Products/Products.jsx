import React from 'react'
import Hero from './Hero'
import Footer from '../../components/Footer'

function Products({ pageTitle = "Our products" }) {
  return (
    <div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
      <Hero pageTitle={pageTitle} />
      {/* Add product sections here */}
      <Footer />
    </div>
  )
}

export default Products
