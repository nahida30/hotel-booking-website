import { MapPin, Heart, Share, Tag } from "lucide-react"
import PropertyDescription from "../SearchResults/SeeAvailability/PropertyDescription"


export default function HotelDescription() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm mb-6 flex-wrap">
        <a href="#" className="text-blue-600 hover:underline">
          Home
        </a>
        <span className="mx-2 text-gray-500">›</span>
        <a href="#" className="text-blue-600 hover:underline">
          Hotels
        </a>
        <span className="mx-2 text-gray-500">›</span>
        <a href="#" className="text-blue-600 hover:underline">
          Bangladesh
        </a>
        <span className="mx-2 text-gray-500">›</span>
        <a href="#" className="text-blue-600 hover:underline">
          Cox's Bazar
        </a>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-700">Resort Beach View (Hotel), Cox's Bazar (Bangladesh) deals</span>
      </nav>

      {/* Tab Navigation */}
      <div className="border-b mb-6">
        <nav className="flex overflow-x-auto scrollbar-hide">
          <a href="#" className="px-4 py-3 text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">
            Overview
          </a>
          <a href="#" className="px-4 py-3 text-gray-700 hover:text-blue-600 whitespace-nowrap">
            Info & prices
          </a>
          <a href="#" className="px-4 py-3 text-gray-700 hover:text-blue-600 whitespace-nowrap">
            Facilities
          </a>
          <a href="#" className="px-4 py-3 text-gray-700 hover:text-blue-600 whitespace-nowrap">
            House rules
          </a>
          <a href="#" className="px-4 py-3 text-gray-700 hover:text-blue-600 whitespace-nowrap">
            The fine print
          </a>
          <a href="#" className="px-4 py-3 text-gray-700 hover:text-blue-600 whitespace-nowrap">
            Guest reviews (7)
          </a>
        </nav>
      </div>

      {/* Hotel Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold">Resort Beach View</h1>
        <div className="flex items-center mt-2 lg:mt-0 space-x-3">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <Heart className="w-5 h-5 text-blue-600" />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <Share className="w-5 h-5 text-blue-600" />
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">Reserve</button>
        </div>
      </div>

      {/* Hotel Address */}
      <div className="flex items-start mb-6">
        <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="ml-2">
          <p className="text-gray-700">
            Plot # 10, Block # C, Kolatoli Road, 4700 Cox's Bazar, Bangladesh –
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Show map
            </a>
          </p>
        </div>
      </div>

      {/* Price Match */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center text-blue-600">
          <Tag className="w-5 h-5 mr-2" />
          <span className="font-medium">We Price Match</span>
        </div>
      </div>

<div className="flex">

      <div>
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
        {/* Main large image */}
        <div className="md:col-span-2 h-80 md:h-96">
          <img
            src="https://assets.graydientcreative.com/files/outlets/platinum/images/marquis-3-min.jpg"
            alt="Hotel reception"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Side images */}
        <div className="grid grid-rows-2 gap-2 h-80 md:h-96">
          <img
            src="https://d1smozu8r9tb3s.cloudfront.net/assets/files/9923/cambria-cae86-lobby_overall.2000x1333.jpg?124dsu"
            alt="Hotel room"
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/65ea57ee166f6a2f2b588f9d/e09ca30d-2b9c-408c-b928-a0385c01106a/north-devon-hotel-at-the-beach-min.jpg"
            alt="Hotel room"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="h-20 md:h-24">
            <img
              src={`https://watermark.lovepik.com/photo/20211121/large/lovepik-hotel-room-picture_500597052.jpg`}
              alt={`Hotel thumbnail ${index}`}
              className="w-full h-full object-cover rounded-md cursor-pointer hover:opacity-80"
            />
          </div>
        ))}
      </div>
      </div>


      {/* Rating and Map Section */}
      <div className="w-sm gap-6">
        {/* Rating Section */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Disappointing</h3>
                <p className="text-gray-600">7 reviews</p>
              </div>
              <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md text-lg">4.2</div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Cox's Bazar</span>
              <div className="bg-gray-200 text-gray-800 font-bold px-3 py-1 rounded-md text-lg">6.2</div>
            </div>
            <div className="relative h-60 bg-gray-200 rounded-md overflow-hidden mb-2">
              <img
                src="/placeholder.svg?height=240&width=320"
                alt="Map location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 rounded-full p-2">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
              Show on map
            </button>
          </div>
        </div>
      </div>
</div>

<PropertyDescription></PropertyDescription>
    </div>
  )
}

