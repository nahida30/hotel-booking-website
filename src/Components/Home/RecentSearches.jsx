"use client";
import image1 from "../../../public/assests/images/image5.jpg"
import image2 from "../../../public/assests/images/image6.jpg"

const RecentSearches = () => {
  const searches = [
    {
      id: 1,
      location: "Dhaka",
      dates: "24 Nov–30 Nov, 2 people",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20115500-ue9GVURnL3nRNl1lpXog2JKSyxdp5y.png",
    },
    {
      id: 2,
      location: "Dhaka",
      dates: "30 Nov–23 Dec, 2 people",
      image:
        "https://ibb.co.com/YBZmf5JYhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQNyeUBQ2pieLGXSOohKjyG3ZSfzctrJBEw&s",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-10 px-4">
      <h3 className="text-2xl font-bold mb-5">Your recent searches</h3>
      <div className="flex gap-4">

      <div className="flex flex-col sm:flex-row gap-5">
       
          <div
            className="flex items-center gap-5 p-3 border border-gray-200 rounded-lg cursor-pointer"
          >
            <img
              src={image1}
              alt="img"
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md"
            />
            <div>
              <h4 className="text-sm font-bold">Dhaka</h4>
              <p className="text-sm text-gray-600">24 Nov–30 Nov, 2 people</p>
            </div>
          </div>

      </div>
      <div className="flex flex-col sm:flex-row gap-5">
       
          <div
            className="flex items-center gap-5 p-3 border border-gray-200 rounded-lg cursor-pointer"
          >
            <img
              src={image1}
              alt="img"
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md"
            />
            <div>
              <h4 className="text-sm font-bold">Dhaka</h4>
              <p className="text-sm text-gray-600">24 Nov–30 Nov, 2 people</p>
            </div>
          </div>

      </div>
      </div>
    </div>
  );
};

export default RecentSearches;