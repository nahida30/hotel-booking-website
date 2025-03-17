"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaBed,
  FaCalendarAlt,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const navigate = useNavigate();

  const popularDestinations = [
    "Cox's Bazar",
    "Dhaka",
    "Sylhet",
    "Chittagong",
    "Sreemangal",
  ];

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleGuestsChange = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]: operation === "increase" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const handleSearch = () => {
    navigate("/search-results"); 
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-[-50px] bg-white p-4 sm:p-5 rounded-lg shadow-lg flex flex-col sm:flex-row gap-3 relative">
      {/* Destination Input */}
      <div className="flex-1 relative">
        <div
          className="flex items-center border-2 border-[#febb02] rounded-md p-2 sm:p-3 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaBed className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-none text-sm sm:text-lg w-full focus:outline-none"
            onFocus={() => setShowDropdown(true)}
          />
        </div>

        {/* Dropdown for popular destinations */}
        {showDropdown && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-3 z-10">
            <p className="font-semibold text-gray-700 mb-2">Popular nearby destinations</p>
            <ul>
              {popularDestinations.map((place, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => {
                    setDestination(place);
                    setShowDropdown(false);
                  }}
                >
                  <FaMapMarkerAlt className="text-gray-600" />
                  <div>
                    <p className="font-semibold">{place}</p>
                    <p className="text-sm text-gray-500">Bangladesh</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Dates Input */}
      <div className="flex-1 relative">
        <div
          className="flex items-center border-2 border-[#febb02] rounded-md p-2 sm:p-3 cursor-pointer"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Wed 5 Mar — Thu 6 Mar"
            value={
              startDate && endDate
                ? `${startDate.toLocaleDateString()} — ${endDate.toLocaleDateString()}`
                : ""
            }
            readOnly
            className="border-none text-sm sm:text-lg w-full focus:outline-none"
          />
        </div>

        {/* Date Picker */}
        {showDatePicker && (
          <div className="absolute top-12 left-0 z-10">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </div>
        )}
      </div>

      {/* Guests Input */}
      <div className="flex-1 relative">
        <div
          className="flex items-center border-2 border-[#febb02] rounded-md p-2 sm:p-3 cursor-pointer"
          onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
        >
          <FaUser className="mr-2 text-gray-500" />
          <span className="text-sm sm:text-lg">
            {guests.adults} adults · {guests.children} children · {guests.rooms} room
          </span>
          <FaChevronDown className="ml-auto text-gray-500" />
        </div>

        {/* Guests Dropdown */}
        {showGuestsDropdown && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10">
            <div className="flex flex-col gap-4">
              {/* Adults */}
              <div className="flex justify-between items-center">
                <span>Adults</span>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("adults", "decrease")}
                  >
                    -
                  </button>
                  <span>{guests.adults}</span>
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("adults", "increase")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center">
                <span>Children</span>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("children", "decrease")}
                  >
                    -
                  </button>
                  <span>{guests.children}</span>
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("children", "increase")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Rooms */}
              <div className="flex justify-between items-center">
                <span>Rooms</span>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("rooms", "decrease")}
                  >
                    -
                  </button>
                  <span>{guests.rooms}</span>
                  <button
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                    onClick={() => handleGuestsChange("rooms", "increase")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Done Button */}
              <button
                className="mt-4 bg-[#0071c2] text-white px-4 py-2 rounded-md"
                onClick={() => setShowGuestsDropdown(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        className="bg-[#0071c2] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-lg flex items-center justify-center gap-2"
        onClick={handleSearch} 
      >
        <FaSearch /> Search
      </button>
    </div>
  );
};

export default SearchForm;