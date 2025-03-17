import { Clock, CreditCard, ChevronDown, Plus } from "lucide-react"
import SimilarProperties from "./SimilarProperties"

export default function GuestReviews() {
  // Rating data
  const ratings = [
    { category: "Staff", score: 5.4, color: "bg-red-500" },
    { category: "Facilities", score: 6.2, color: "bg-blue-600" },
    { category: "Cleanliness", score: 5.8, color: "bg-blue-600" },
    { category: "Comfort", score: 5.8, color: "bg-blue-600" },
    { category: "Value for money", score: 5.4, color: "bg-blue-600" },
    { category: "Location", score: 6.2, color: "bg-blue-600" },
  ]

  return (
    <div className="max-w-7xl mx-auto ">
    

      {/* Guest Reviews Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Guest reviews</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition duration-200">
          See availability
        </button>
      </div>

      {/* Overall Rating */}
      <div className="flex items-center mb-6">
        <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md text-lg mr-3">4.2</div>
        <div className="font-medium text-lg mr-2">Disappointing</div>
        <div className="text-gray-600">· 7 reviews</div>
        <a href="#" className="text-blue-600 ml-3 hover:underline">
          Read all reviews
        </a>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-900 mb-4">Categories:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {rating.category === "Staff" && <ChevronDown className="h-4 w-4 text-red-500 mr-1" />}
                <span className="text-gray-700">{rating.category}</span>
              </div>
              <div className="flex items-center flex-1 mx-4">
                <div className="h-2 bg-gray-200 rounded-full flex-1 overflow-hidden">
                  <div
                    className={`h-full ${rating.color} rounded-full`}
                    style={{ width: `${(rating.score / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="font-medium text-gray-900 w-8 text-right">{rating.score}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-2">
          <div className="flex items-center text-red-500 text-sm">
            <ChevronDown className="h-4 w-4 mr-1" />
            <span>Low score for Cox's Bazar</span>
          </div>
        </div>
      </div>

      {/* Select Topics */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-4">Select topics to read reviews:</h3>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50">
            <Plus className="h-4 w-4 mr-1" />
            <span>Room</span>
          </button>
          <button className="flex items-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50">
            <Plus className="h-4 w-4 mr-1" />
            <span>Location</span>
          </button>
        </div>
      </div>

      {/* Read All Reviews Button */}
      <div>
        <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded font-medium hover:bg-blue-50 transition duration-200">
          Read all reviews
        </button>
      </div>

      <SimilarProperties></SimilarProperties>

    </div>
  )
}

