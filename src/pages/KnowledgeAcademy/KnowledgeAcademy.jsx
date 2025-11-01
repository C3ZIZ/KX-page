import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroBg from "../../assets/backgrounds/KxAcademyBg.svg";
import kxVideoWebm from "../../assets/videos/KxAcademy.webm";
import kxVideoMp4 from "../../assets/videos/KxAcademy.mp4";

export default function KnowledgeAcademy() {
  // Only enable background video when it's beneficial (desktop, no reduced motion)
  const [enableVideo, setEnableVideo] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Respect user preference for reduced motion and avoid on small screens
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isSmallScreen) {
      setEnableVideo(false);
      return;
    }

    // Defer loading until the hero enters the viewport
    const node = sectionRef.current;
    if (!node) {
      setEnableVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnableVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Best-effort autoplay once mounted and enabled
  useEffect(() => {
    if (!enableVideo || !videoRef.current) return;
    const vid = videoRef.current;
    const tryPlay = async () => {
      try {
        await vid.play();
      } catch {
        // Autoplay might be blocked; leave poster image visible
      }
    };
    tryPlay();
  }, [enableVideo]);
  return (
    <div className="w-full bg-[#071A2C] text-white overflow-x-hidden">
      {/* Top nav (centered to match your 1204px navbar width) */}
      <div className="w-full flex justify-center pt-12">
        <Navbar active="about" />
      </div>

      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative w-full h-[852px] overflow-hidden"
        style={{
          // Gredeint/01
          background:
            "linear-gradient(94deg, rgba(23, 13, 2, 0.57) 4.87%, #071A2C 75.88%)",
        }}
      >
        {/* Background media: lightweight poster first, then WebM with MP4 fallback */}
        {enableVideo ? (
          <video
            ref={videoRef}
            className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroBg}
            aria-hidden="true"
          >
            <source src={kxVideoWebm} type="video/webm" />
            <source src={kxVideoMp4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroBg}
            alt=""
            className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        )}
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
