import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa";

const properties = [
  {
    name: "Domki Wierszyki Shelters",
    location: "Poland, Zakopane",
    rating: 9.8,
    review: "Exceptional",
    reviewsCount: 88,
    image: "https://media.istockphoto.com/id/471083055/photo/hurricane-katrina-cottage.jpg?s=612x612&w=0&k=20&c=oXDArUlTEp9CiwQ75u-aDrTrLmn1yrtM6fTmrzRCF0I=", 
  },
  {
    name: "Ranczo w Dolinie",
    location: "Poland, Kiszkowo",
    rating: 9.7,
    review: "Exceptional",
    reviewsCount: 180,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/88/e8/the-chalets-naldehra.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Tiny House Dreischwesternherz",
    location: "Germany, Trier",
    rating: 9.5,
    review: "Exceptional",
    reviewsCount: 155,
    image: "https://4.imimg.com/data4/BL/WA/MY-2599162/cottages-500x500.jpg",
  },
  {
    name: "Das rote Haus hinterm Deich",
    location: "Germany, Simonsberg",
    rating: 9.2,
    review: "Superb",
    reviewsCount: 47,
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function UniqueProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-5 overflow-hidden">
      <h2 className="text-2xl font-bold mb-2">Stay at our top unique properties</h2>
      <p className="text-gray-500 mb-4">From castles and villas to boats and igloos, we've got it all</p>

      <div className="flex transition-transform duration-300 ease-in-out gap-5"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {properties.map((property, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 min-w-full md:min-w-[50%] lg:min-w-[33.33%]">
            <div className="relative">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-lg" />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <FaRegHeart className="text-gray-600" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-500">{property.location}</p>
              <p className="mt-2 text-sm">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs">{property.rating}</span> {property.review} • {property.reviewsCount} reviews
              </p>
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
