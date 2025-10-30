import homeBackground from "../../assets/BG.svg"
import Header from "../../components/Header"
import HeroCTA from "./HeroCTA";


const HOME_BG_STYLE = {
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  

  return (
    <>
      <section
        className="relative w-full bg-no-repeat bg-cover pt-12"
        style={HOME_BG_STYLE}
        dir="ltr"
        role="banner"
        aria-label="القسم الرئيسي"
      >
        <Header/>
        <HeroCTA />
      </section>
    </>
  )
}

export default Hero;