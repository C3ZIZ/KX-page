import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import StartHere from "./StartHere";

function HomePage() {
  

  return (
    <div className="min-h-screen">
      
      <Hero />
      <About />
      <Services />
      <StartHere />
    </div>
  )
}

export default HomePage;