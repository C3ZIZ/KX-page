

function StartHere() {
  

  return (
    <section className="bg-[#071C2F] w-full  p-14 py-16 relative z-10 ">
      
      <div className="max-w-7xl ">
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-[#FA7C0B] drop-shadow-[0_0_3px_#FA7C0B]"></span> 
          <span className="font-medium text-xl text-[#FA7C0B] [text-shadow:0_0_8px_#FA7C0B,0_0_18px_#FA7C0B]">Start Here</span>
        </div>

        <h2 className="mt-4 text-4xl/12 font-bold text-white">
          From Discovery to Market
        </h2>

        <p className="mt-3 text-4xl/13 text-white z-10 ">
          Explore a preview of SPINx — a light version designed to show how we assess the commercial
          readiness of your research in minutes.
        </p>
      </div>
      <div className="">
        <div className="px-20 pt-16 pb-10 mt-40 rounded-[80px]! before:p-0.2! border-gradiant">
          <form action="https://formspree.io/f/xanldyjo" method="POST" className="z-100! flex flex-col md:flex-row items-center gap-4 p-6 rounded-lg text-white">
            
            <div className="flex flex-col w-full md:w-1/3">
              <label for="name" className="mb-1 ml-4 text-xl font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ahmed zahir"
                className="px-4 py-2 rounded-full z-100! bg-[#fdf2e9] text-black focus:outline-none"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/3">
              <label for="name" className="mb-1 ml-4 text-xl font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@mail.com"
                className="px-4 py-2 rounded-full z-100! bg-[#fdf2e9] text-black focus:outline-none"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <label for="name" className="mb-1 ml-4 text-xl font-semibold">Your research abstract</label>
              <label
                for="abstract"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center z-100!"
              >
                Upload File
              </label>
              <input type="file" id="abstract" name="abstract" className="hidden" />
            </div>
          </form>

        </div>
        <div className="flex justify-center mt-8">
          <button className="cursor-pointer text-xl! text-white px-8 py-3 border-gradiant"
            >
              Explore more products
          </button>
        </div>
      </div>
    </section>
  )
}

export default StartHere;