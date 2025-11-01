function HeroCTA({ title = "Your Deep-Tech Partner" }) {

  return (
   <section
      dir="ltr"
      className="relative text-center py-56"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-6xl text-white font-bold">
          {title}
        </h1>
        <h2 className="product-h2 mt-5">
          Products description
        </h2>
        <h3 className="product-h3 my-5">
          We unlock the power of deep-tech together to create impact.
        </h3>


        <button className="cursor-pointer text-xl! text-white  px-12 py-2 border-gradiant "
        >
          Contact us
        </button>
      </div>
    </section>
  )
}

export default HeroCTA;
