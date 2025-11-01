import homeBackground from "../../../assets/bg2.svg";
import Navbar from "../../../components/Navbar";

function ProductHero({
  title = "Product Title",
  subtitle = "Product Tagline",
  description = "Short description goes here.",
  buttonLabel = "Learn More",
  buttonHref = "#",
}) {
  const HOME_BG_STYLE = {
    backgroundImage: `url(${homeBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="relative w-full bg-no-repeat bg-cover overflow-hidden"
      style={HOME_BG_STYLE}
      dir="ltr"
      role="banner"
      aria-label="Product hero"
    >
      {/* Center the navbar to match its fixed width */}
      <div className="w-full flex justify-center pt-12">
        <Navbar active="products" />
      </div>

      {/* CTA */}
      <div dir="ltr" className="relative text-center py-56">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl text-white font-bold">{title}</h1>

          {subtitle && (
            <h2 className="product-h2 mt-5">{subtitle}</h2>
          )}

          {description && (
            <h3 className="product-h3 my-5">{description}</h3>
          )}

          {buttonLabel && (
            <a href={buttonHref}>
              <button className="product-button cursor-pointer border-gradiant mx-auto">
                {buttonLabel}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
