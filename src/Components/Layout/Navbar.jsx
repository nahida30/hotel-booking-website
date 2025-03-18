import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === "/register" || location.pathname === "/signin";

  return (
    <nav className="bg-[#003580] text-white py-2.5">
      <div className="container max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">
          <a href="/">Booking.com</a>
        </h1>

        {/* Show only language and help button on Register and Sign In pages */}
        {isAuthPage ? (
          <div className="flex items-center gap-5">
            {/* Language Button */}
            <button className="w-8 h-8 bg-white text-[#003580] rounded-full flex items-center justify-center">
              🇬🇧
            </button>

            {/* Help Button */}
            <button className="bg-transparent border-none text-white text-lg">
              ?
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            {/* Currency Button */}
            <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
              BDT
            </button>

            {/* Language Button */}
            <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-[#003580] rounded-full flex items-center justify-center text-xs">
              🇬🇧
            </button>

            {/* Help Button */}
            <button className="bg-transparent border-none text-white text-lg">
              ?
            </button>

            {/* List Property Button */}
            <button className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm">
              List property
            </button>

            {/* Register Button (Navigates to Register Page) */}
            <button
              className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm"
              onClick={() => navigate("/register")}
            >
              Register
            </button>

            {/* Sign In Button */}
            <button
              className="bg-white text-[#003580] px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
