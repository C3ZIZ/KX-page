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
        <h2 className="text-3xl text-white mt-5">
          In order to guarantee that societies thrive in the face of the acute global challenges they encounter,
          we must create innovation ecosystems that are robust, resilient, and proactive!
        </h2>
        <h3 className="text-2xl text-white my-5">
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