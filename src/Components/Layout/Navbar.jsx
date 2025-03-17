"use client";

const Navbar = () => (
  <nav className="bg-[#003580] text-white py-2.5">
    <div className="container max-w-[1200px] mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold">
        <a href="/">Booking.com</a></h1>
      <div className="flex items-center gap-2 sm:gap-5">
        {/* Currency Button */}
        <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
          BDT
        </button>

        {/* Language Button */}
        <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-[#003580] rounded-full flex items-center justify-center text-xs">
          UK
        </button>

        {/* Help Button */}
        <button className="bg-transparent border-none text-white">?</button>

        {/* List Property Button */}
        <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
          List property
        </button>

        {/* Register Button */}
        <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
          Register
        </button>

        {/* Sign In Button */}
        <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
          Sign in
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;