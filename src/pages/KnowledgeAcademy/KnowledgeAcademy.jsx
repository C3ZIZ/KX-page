import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroBg from "../../assets/backgrounds/KxAcademyBg.svg";

export default function KnowledgeAcademy() {
  return (
    <div className="w-full bg-[#071A2C] text-white overflow-x-hidden">
      {/* Top nav (centered to match your 1204px navbar width) */}
      <div className="w-full flex justify-center pt-12">
        <Navbar active="about" />
      </div>

      {/* HERO */}
      <section
        className="relative w-full h-[852px] overflow-hidden"
        style={{
          // Gredeint/01
          background:
            "linear-gradient(94deg, rgba(23, 13, 2, 0.57) 4.87%, #071A2C 75.88%)",
        }}
      >
        {/* Background SVG (full-bleed, desktop fit) */}
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
        />
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
