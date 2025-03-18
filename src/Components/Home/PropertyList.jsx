"use client";
import { useNavigate } from "react-router-dom";
import image1 from "../../../public/assests/images/image2.jpg"
import image2 from "../../../public/assests/images/image3.jpg"
import image3 from "../../../public/assests/images/image4.jpg"

const PropertyList = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Still interested in these properties?</h2>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Property 1 */}
        <div className="bg-white rounded-lg shadow-md w-72 cursor-pointer" onClick={() => navigate("/availability")}>
          <img src={image1} alt="" className="h-52" />
         <div className="p-2">
         <h3 className="text-sm font-bold mb-2">The Ark</h3>
          <p className="text-sm text-gray-600 mb-4">Sylhet, Bangladesh</p>
          <div className="flex items-center">
            <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-sm">
              8.9 
            </span>
            <span className="ml-2 text-gray-600 text-sm">Fabulous - 26 reviews</span>
         </div>
          </div>
        </div>

        {/* Property 2 */}
        <div className="bg-white rounded-lg shadow-md w-72 cursor-pointer" onClick={() => navigate("/availability")}>
        <img src={image2} alt="" className="h-52" />
         <div className="p-2">
         <h3 className="text-sm font-semibold mb-2">Balishira Resort Ltd.</h3>
          <p className="text-sm text-gray-600 mb-4">Sreemangal, Bangladesh</p>
          <div className="flex items-center">
            <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-sm">
              6.6 
            </span>
            <span className="ml-2 text-gray-600">Pleasant - 16 reviews</span>
         </div>
          </div>
        </div>

        {/* Property 3 */}
        <div className="bg-white rounded-lg shadow-md w-72 cursor-pointer" onClick={() => navigate("/availability")}>
        <img src={image3} alt="" className="h-52" />
          <div className="p-2">
          <h3 className="text-sm font-semibold mb-2">Platinum Residence</h3>
          <p className="text-sm text-gray-600 mb-4">Dhaka, Bangladesh</p>
          <div className="flex items-center">
            <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-sm">
              83 
            </span>
            <span className="ml-2 text-gray-600">Very good - 319 reviews</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;