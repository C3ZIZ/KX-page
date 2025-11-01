import homeBackground from "../../assets/bg2.svg"
import Navbar from "../../components/Navbar";
import HeroCTA from "./HeroCTA";


const HOME_BG_STYLE = {
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Hero({ pageTitle }) {

  return (
    <>
      <section
        className="relative w-full bg-no-repeat bg-cover overflow-hidden"
        style={HOME_BG_STYLE}
        dir="ltr"
        role="banner"
        aria-label="القسم الرئيسي"
      >
        {/* Center the navbar to match its fixed width */}
        <div className="w-full flex justify-center pt-12">
          <Navbar active="products" />
        </div>
        <HeroCTA title={pageTitle} />
      </section>
    </>
  )
}

export default Hero;
