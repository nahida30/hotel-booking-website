import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const destinations = [
  { name: "Cox's Bazar", properties: 60, image: "https://www.brownandhudson.com/assets/uploads/global/Nowhere_road.jpg" },
  { name: "Dhaka", properties: 255, image: "https://static.toiimg.com/photo/58807609.cms" },
  { name: "Sylhet", properties: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThp2wkuhZp3VJUAgVgrOpamG1DgXY_Tgo53g&s" },
  { name: "Chittagong", properties: 40, image: "https://cdn.create.vista.com/api/media/small/19511247/stock-photo-boardwalk-on-the-beach" },
  { name: "Sreemangal", properties: 27, image: "https://img.freepik.com/premium-photo/natural-travel-destination-beautiful-sky-scenery-mountain-landscape-nature_1105964-3636.jpg" },
  { name: "Rajshahi", properties: 7, image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Manali_main_tv_destination_img_1_l_1021_1529.jpg" },
];

export default function Explorecountry() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, destinations.length - 3));
  };

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-[1150px] mx-auto overflow-hidden relative">
      <h2 className="text-2xl font-bold mb-2">Explore Bangladesh</h2>
      <p className="text-gray-600 mb-4">These popular destinations have a lot to offer</p>
      <div
        className="flex gap-4 transition-transform duration-300"
        style={{ transform: `translateX(-${scrollIndex * 20}%)` }}
      >
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="min-w-[20%] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-gray-500">{dest.properties} properties</p>
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

      {scrollIndex < destinations.length - 3 && (
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
