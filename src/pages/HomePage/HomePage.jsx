import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import StartHere from "./StartHere";
import Partnershops from "./Partnershops";
import Products from "./Products";

import Footer from "../../components/Footer"

function HomePage() {
  

  return (
    <div className="min-h-screen">
      
      <Hero />
      <About />
      <Services />
      <StartHere />
      <Partnershops />
      <Products />

      <Footer />
    </div>
  )
}

export default HomePage;