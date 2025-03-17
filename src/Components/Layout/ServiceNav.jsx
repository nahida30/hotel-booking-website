"use client";

import {
  FaBed,
  FaPlane,
  FaCar,
  FaUmbrellaBeach,
  FaTaxi,
} from "react-icons/fa";

const ServiceNav = () => (
  <div className="bg-[#003580] text-white py-2.5">
    <div className="container max-w-[1200px] mx-auto px-4 flex flex-wrap gap-2 sm:gap-5">
      {/* Stays Button */}
      <button className="flex items-center gap-1.5 bg-[#1a4fa0] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
        <FaBed /> Stays
      </button>

      {/* Flights Button */}
      <button className="flex items-center gap-1.5 bg-transparent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
        <FaPlane /> Flights
      </button>

      {/* Car Rentals Button */}
      <button className="flex items-center gap-1.5 bg-transparent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
        <FaCar /> Car rentals
      </button>

      {/* Attractions Button */}
      <button className="flex items-center gap-1.5 bg-transparent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
        <FaUmbrellaBeach /> Attractions
      </button>

      {/* Airport Taxis Button */}
      <button className="flex items-center gap-1.5 bg-transparent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
        <FaTaxi /> Airport taxis
      </button>
    </div>
  </div>
);

export default ServiceNav;