import homeBackground from "../../../assets/bg2.svg";
import Navbar from "../../../components/Navbar";
import landingWebm from "../../../assets/videos/LandingpageKx.webm";
import landingMp4 from "../../../assets/videos/LandingpageKx.mp4";
import VideoBackground from "../../../components/VideoBackground";

function ProductHero({
  title = "Product Title",
  subtitle = "Product Tagline",
  description = "Short description goes here.",
  buttonLabel = "Learn More",
  buttonHref = "#",
}) {
  return (
    <VideoBackground poster={homeBackground} webm={landingWebm} mp4={landingMp4} ariaLabel="Product hero">
      {/* Center the navbar to match its fixed width */}
      <div className="w-full flex justify-center pt-12">
        <Navbar active="products" />
      </div>

      {/* CTA */}
      <div dir="ltr" className="relative text-center py-56">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl text-white font-bold">{title}</h1>

          {subtitle && <h2 className="product-h2 mt-5">{subtitle}</h2>}

          {description && <h3 className="product-h3 my-5">{description}</h3>}

          {buttonLabel && (
            <a href={buttonHref}>
              <button className="product-button cursor-pointer border-gradiant mx-auto">{buttonLabel}</button>
            </a>
          )}
        </div>
      </div>
    </VideoBackground>
  );
}

export default ProductHero;
