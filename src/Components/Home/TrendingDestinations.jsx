import image1 from "../../../public/assests/images/image7.jpg"
import image2 from "../../../public/assests/images/image8.jpg"
import image3 from "../../../public/assests/images/image9.jpg"
import image4 from "../../../public/assests/images/image10.jpg"
import image5 from "../../../public/assests/images/image4.jpg"

const TrendingDestinations = () => {
   
  
    return (
      <div className="container max-w-[1200px] mx-auto p-6">
        <h2 className="text-3xl font-bold mb-2">Trending destinations</h2>
        <p className="text-gray-600 mb-6">Most popular choices for travellers from Bangladesh</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90">
              <img
                src={image1}
                alt="Kuala Lumpur"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Kuala Lumpur
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90">
              <img
                src={image2}
                alt="Dhaka"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">Dhaka</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90">
              <img
                src={image3}
                alt="Bangkok"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">Bangkok</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90">
              <img
                src={image4}
                alt="Cox's Bazar"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">Cox's Bazar</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90">
              <img
                src={image5}
                alt="Singapore"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">Singapore</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrendingDestinations;
  