import React from 'react'
import Hero from './Hero'
import Footer from '../../components/Footer'

function ServicesPage({ pageTitle = "Your Deep-Tech Partner" }) {
	return (
		<div className="w-full min-h-screen bg-[#071A2C] text-white overflow-x-hidden">
			<Hero pageTitle={pageTitle} />
			{/* Add more sections for services here if needed */}
			<Footer />
		</div>
	)
}

export default ServicesPage
