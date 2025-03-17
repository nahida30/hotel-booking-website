import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const travelInspirations = [
  {
    title: "New Year’s Eve in New York City",
    description: "Ring in the new year with iconic moments and unforgettable memories in New York City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQco5Oky_Kg1I3k-x2j4mGpXgh_TNl9TTKSDA&s", // Replace with actual image URL
  },
  {
    title: "6 best ryokans in Japan to rejuvenate yourself",
    description: "Discover unmissable ryokans to relax and unwind in style.",
    image: "https://virtuoso-prod.dotcms.cloud/dA/e17624af-d351-448c-bd26-56081432fc58/partner2Image/NorwegianCruiseLine.jpg/webp",
  },
  {
    title: "7 best places in Asia to celebrate Christmas",
    description: "Discover the shimmering lights and festive sights of Asia’s holiday season.",
    image: "https://www.classictravel.lk/frontend/images/home/home-main.png",
  },
  {
    title: "8 best places in Asia to celebrate Christmas",
    description: "Discover the shimmering lights and festive sights of Asia’s holiday season.",
    image: "https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/3:2/w_7950,h_5300,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg",
  },
];

export default function Travel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? travelInspirations.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === travelInspirations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-5 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Get inspiration for your next trip</h2>
        <button className="text-blue-500">More</button>
      </div>

      <div className="flex transition-transform duration-300 ease-in-out gap-5"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {travelInspirations.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 min-w-full md:min-w-[50%] lg:min-w-[33.33%]">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-lg" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
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
