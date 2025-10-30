function Header() {
  

  return (
    <div className="
      mx-auto max-w-[90%]"
    >
      <header className=" rounded-full
        w-full h-[88px] flex items-center justify-between px-8 mx-auto
        border-2-gradiant "
      >
        <div className="flex-1">
          <h2 className="text-white text-2xl font-semibold">Knowledgex</h2>
        </div>
        
        <div className="flex items-center justify-center gap-5 flex-1">
          <a className="text-white" href="/">About</a>
          <a className="text-white" href="/">Services</a>
          <a className="text-white" href="/">Products</a>
          <a className="text-white" href="/">Impact</a>
        </div>

        <div className="flex items-center justify-end gap-4 flex-1">
            
            <button className=" cursor-pointer px-7 py-2.5 rounded-full text-white font-medium border-gradiant"
            >
              Contact us
            </button>

          <div className="
              rounded-full p-[1.8px] max-w-max flex items-center justify-center
              bg-[linear-gradient(35deg,#ff8a2b_0%,#0b0f14_100%)]
              shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          >
                    
            <button className="
              relative inline-flex items-center justify-center
              px-6 py-2 rounded-full text-white font-semibold
              bg-[linear-gradient(200deg,#8a3c1f_0%,#3a271d_45%,#000_100%)]"
            >

              <span className="relative">KX Academy</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;