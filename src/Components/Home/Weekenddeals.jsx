import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const hotels = [
  {
    name: "Hotel De Bangkok",
    location: "Bangkok, Thailand",
    rating: 8.1,
    review: "Very good",
    reviewsCount: 1205,
    priceOld: 23855,
    priceNew: 12071,
    image: "https://plus.unsplash.com/premium_photo-1661923725782-f73c990fbddf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
  },
  {
    name: "Vortex KLCC Apartments",
    location: "Kuala Lumpur, Malaysia",
    rating: 8.3,
    review: "Very good",
    reviewsCount: 1493,
    priceOld: 18786,
    priceNew: 12962,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Hotel Shabnam",
    location: "Kolkata, India",
    rating: 6.8,
    review: "Review score",
    reviewsCount: 23,
    priceOld: 3279,
    priceNew: 1967,
    image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Volve Hotel Bangkok",
    location: "Bangkok, Thailand",
    rating: 9.3,
    review: "Superb",
    reviewsCount: 861,
    priceOld: 58353,
    priceNew: 31137,
    image: "https://cf.bstatic.com/xdata/images/hotel/max500/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1",
  },
];

export default function Weekenddeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? hotels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === hotels.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-5 overflow-hidden">

      
<h2 className="text-2xl font-bold mb-2">Deals for the weekend</h2>
<p className="text-gray-600 mb-6">Save on stays for 21 March - 23 March</p>
      <div className="flex transition-transform duration-300 ease-in-out gap-5"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 min-w-full md:min-w-[50%] lg:min-w-[33.33%]">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p className="text-gray-500">{hotel.location}</p>
              <p className="mt-2 text-sm">⭐ {hotel.rating} {hotel.review} • {hotel.reviewsCount} reviews</p>
              <p className="text-sm text-green-600">Early 2025 Deal</p>
              <p className="text-lg font-bold">BDT {hotel.priceNew.toLocaleString()}</p>
              <p className="text-sm line-through text-red-500">BDT {hotel.priceOld.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <FaArrowRight />
      </button>
    </div>
  );
}










