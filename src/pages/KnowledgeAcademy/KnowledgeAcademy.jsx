import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VideoBackground from "../../components/VideoBackground";
import heroBg from "../../assets/backgrounds/KxAcademyBg.svg";
import kxVideoWebm from "../../assets/videos/KxAcademy.webm";
import kxVideoMp4 from "../../assets/videos/KxAcademy.mp4";

export default function KnowledgeAcademy() {
  return (
    <div className="w-full bg-[#071A2C] text-white overflow-x-hidden">
      {/* Top nav (centered to match your 1204px navbar width) */}
      <VideoBackground
        poster={heroBg}
        webm={kxVideoWebm}
        mp4={kxVideoMp4}
        className="h-[852px]"
        ariaLabel="Knowledge Academy hero"
      >
        <div className="w-full flex justify-center pt-12">
          <Navbar active="about" />
        </div>
      </VideoBackground>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
