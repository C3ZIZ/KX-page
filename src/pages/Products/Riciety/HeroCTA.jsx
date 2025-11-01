function HeroCTA({ title = "Your Deep-Tech Partner" }) {

  return (
    <section dir="ltr" className="relative text-center py-56">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-6xl text-white font-bold">{title}</h1>

        <h2 className="product-h2 mt-5">
           Open Research Platform
        </h2>

        <h3 className="product-h3 my-5">
          An open platform redefining collaboration in academia across universities and disciplines.
        </h3>

        <button className="product-button cursor-pointer border-gradiant mx-auto">
          Join Now
        </button>
      </div>
    </section>
  )
}

export default HeroCTA;
