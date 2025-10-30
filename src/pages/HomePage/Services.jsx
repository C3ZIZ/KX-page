import DottedMesh from "../../components/dottedMesh";

function Services() {
  

  return (
    <section className={` bg-[linear-gradient(195deg,#170D02_0%,#071A2C_70%)] w-full  p-14 py-16 relative z-10`}>
      <DottedMesh />
      <div className="max-w-7xl ">
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]"></span> 
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">Services</span>
        </div>

        <h2 className="mt-4 text-4xl/12 font-bold text-white">
          Knowledgex offers integrated deep-tech solutions that build innovation
          and entrepreneurship ecosystems within research institutes.
        </h2>

        <p className="mt-4 text-4xl/13 text-white z-10 ">
          Our programs are designed to fast-track Saudi knowledge-based ventures led by researchers and inventors
          with patents or research of commercial potential—ensuring that innovation is not only scientifically sound, but also commercially viable
          and capable of becoming a successful spin-out.
        </p>
      </div>
      <div>
        <div className="px-20 pt-16 pb-10 mt-10 rounded-[80px]! before:p-0.2! border-gradiant">
          <h3 className="text-white text-4xl font-bold">Commercialization</h3>
          <p className="text-white text-2xl max-w-[95%]">
            We help transform your research institute into a hub for innovation and entrepreneurship.
            Our customizable University Venture Building Program is tailored to your institute’s goals,
            strengths, and research priorities, fast-tracking Saudi knowledge-based spinouts led by researchers
            and inventors with commercially viable patents or discoveries.
          </p>
          <div className="mt-16 flex justify-end">
            <button className="cursor-pointer text-xl! text-white px-12 py-2 border-gradiant"
            >
              Know More
            </button>
          </div>
        </div>

        <div className="px-20 pt-16 pb-10 mt-4 rounded-[80px]! before:p-0.2! border-gradiant">
          <h3 className="text-white text-4xl font-bold">Entrepreneurship to Research</h3>
          <p className="text-white text-2xl max-w-[95%]">
            We help transform your research institute into a hub for innovation and entrepreneurship.
            Our customizable University Venture Building Program is tailored to your institute’s goals,
            strengths, and research priorities, fast-tracking Saudi knowledge-based spinouts led by researchers
            and inventors with commercially viable patents or discoveries.
          </p>
          <div className="mt-16 flex justify-end">
            <button className="cursor-pointer text-xl! text-white  px-12 py-2 border-gradiant"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;