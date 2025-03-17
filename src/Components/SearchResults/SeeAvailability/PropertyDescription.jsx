import { Wifi, Coffee, Car, Users, Clock } from "lucide-react"
import AvailabilityTable from "./AvailabilityTable"

export default function PropertyDescription() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About this property</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Comfortable Accommodation:</h3>
              <p className="text-gray-700">
                Resort Beach View in Cox's Bazar offers family rooms with air-conditioning, balconies, private
                bathrooms, work desks, free toiletries, showers, slippers, TVs, and wardrobes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">Dining and Leisure:</h3>
              <p className="text-gray-700">
                Guests can enjoy a terrace and restaurant serving a buffet breakfast. Free WiFi is available throughout
                the property, ensuring connectivity.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">Convenient Facilities:</h3>
              <p className="text-gray-700">
                The hotel features a 24-hour front desk, room service, and free on-site private parking. Additional
                amenities include a workout area and a swimming pool.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">Location and Access:</h3>
              <p className="text-gray-700">
                Located 3 km from Cox's Bazar Airport, the hotel provides easy access to local attractions.
              </p>
            </div>

            <p className="text-sm text-gray-500 italic">
              Distance in property description is calculated using © OpenStreetMap
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Most popular facilities</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-gray-700">Free WiFi</span>
              </div>

              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-gray-700">Room service</span>
              </div>

              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-gray-700">Free parking</span>
              </div>

              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-gray-700">Family rooms</span>
              </div>

              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-gray-700">24-hour front desk</span>
              </div>

              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-gray-700">Breakfast</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200"></div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Property highlights</h3>

            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2">Breakfast info</h4>
              <p className="text-gray-700">Buffet</p>
            </div>

            <div className="flex items-center mb-6">
              <div className="bg-gray-200 rounded-full p-1 mr-3">
                <Car className="w-5 h-5 text-gray-700" />
              </div>
              <p className="text-gray-700">Free private parking available at the hotel</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Reserve
            </button>
          </div>
        </div>
      </div>

      <AvailabilityTable></AvailabilityTable>
    </div>
  )
}

