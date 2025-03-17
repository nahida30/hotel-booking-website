import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const properties = [
  { name: "Cox's Bazar", image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" },
  { name: "Dhaka", image: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg" },
  { name: "Sylhet", image: "https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" },
  { name: "Chittagong", image: "https://www.samiltonhotel.com/wp-content/uploads/2023/11/Deluxe-Room-The-Samilton-scaled.jpg" },
  { name: "Sreemangal", image: "https://www.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market.jpg" },
  { name: "Rajshahi", image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?cs=srgb&dl=pexels-pixabay-271618.jpg&fm=jpg" },
];

export default function Propertytype() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, properties.length - 3));
  };

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden relative">
      <h2 className="text-2xl font-bold mb-2">Explore Bangladesh</h2>
      <p className="text-gray-600 mb-4">These popular destinations have a lot to offer</p>
      <div
        className="flex gap-4 transition-transform duration-300"
        style={{ transform: `translateX(-${scrollIndex * 20}%)` }}
      >
        {properties.map((prop, index) => (
          <div
            key={index}
            className="min-w-[20%] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={prop.image}
              alt={prop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{prop.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {scrollIndex > 0 && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
      )}

      {scrollIndex < properties.length - 3 && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
