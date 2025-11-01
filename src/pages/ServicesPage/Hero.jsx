import homeBackground from "../../assets/bg2.svg";
import Navbar from "../../components/Navbar";
import HeroCTA from "./HeroCTA";
import VideoBackground from "../../components/VideoBackground";
import landingWebm from "../../assets/videos/LandingpageKx.webm";
import landingMp4 from "../../assets/videos/LandingpageKx.mp4";

function Hero({ pageTitle }) {
  return (
    <>
      <VideoBackground
        poster={homeBackground}
        webm={landingWebm}
        mp4={landingMp4}
        ariaLabel="القسم الرئيسي"
      >
        {/* Center the navbar to match its fixed width */}
        <div className="w-full flex justify-center pt-12">
          <Navbar active="services" />
        </div>
        <HeroCTA title={pageTitle} />
      </VideoBackground>
    </>
  );
}

export default Hero;