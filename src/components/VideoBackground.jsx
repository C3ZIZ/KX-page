import React, { useEffect, useRef, useState } from "react";

/**
 * VideoBackground
 * - poster: image (svg/png) used as CSS background and video poster
 * - webm / mp4: video sources
 * - children: content to render on top of the background
 *
 * The component lazy-enables the video only when in viewport and when
 * prefers-reduced-motion is not set and screen is not small.
 */
function VideoBackground({ poster, webm, mp4, className = "", ariaLabel = "", children }) {
  const [enableVideo, setEnableVideo] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const wrapperStyle = poster
    ? {
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isSmallScreen) {
      setEnableVideo(false);
      return;
    }

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

  useEffect(() => {
    if (!enableVideo || !videoRef.current) return;
    const vid = videoRef.current;
    const tryPlay = async () => {
      try {
        await vid.play();
      } catch {
        // ignore autoplay failures
      }
    };
    tryPlay();
  }, [enableVideo]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-no-repeat bg-cover overflow-hidden ${className}`}
      style={wrapperStyle}
      dir="ltr"
      role="banner"
      aria-label={ariaLabel}
    >
      {enableVideo && (
        <video
          ref={videoRef}
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(94deg, rgba(23, 13, 2, 0.35) 4.87%, rgba(7, 26, 44, 0.65) 75.88%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}

export default VideoBackground;
