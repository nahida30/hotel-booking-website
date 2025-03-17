import { Calendar, Users, Tag, Info, Check, CreditCard, Clock, Coffee } from "lucide-react"
import GuestReviews from "./GuestReviews"

export default function AvailabilityTable() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Availability</h2>
          <div className="flex items-center mt-1">
            <p className="text-gray-600 text-sm">Prices converted to BDT</p>
            <button className="ml-1 text-gray-400">
              <Info className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center mt-2 sm:mt-0 text-blue-600">
          <Tag className="h-5 w-5 mr-2" />
          <span className="font-medium">We Price Match</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row mb-6">
        <div className="flex-1 border border-gray-300 rounded-t-md md:rounded-t-none md:rounded-l-md p-3 flex items-center bg-white">
          <Calendar className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-medium">Sun 23 Mar</span>
            <span className="mx-2">—</span>
            <span className="font-medium">Sat 12 Apr</span>
          </div>
        </div>
        <div className="flex-1 border-x border-b md:border md:border-l-0 border-gray-300 p-3 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
            <span className="text-sm">2 adults · 0 children · 1 room</span>
          </div>
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <button className="bg-blue-600 text-white py-3 px-4 font-medium rounded-b-md md:rounded-b-none md:rounded-r-md hover:bg-blue-700 transition duration-200">
          Change search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-blue-700 text-white p-4 text-left font-medium border-r border-blue-600">Room type</th>
              <th className="bg-blue-700 text-white p-4 text-left font-medium border-r border-blue-600">
                Number of guests
              </th>
              <th className="bg-blue-700 text-white p-4 text-left font-medium border-r border-blue-600">
                Price for 20 nights
              </th>
              <th className="bg-blue-700 text-white p-4 text-left font-medium border-r border-blue-600">
                Your choices
              </th>
              <th className="bg-blue-700 text-white p-4 text-left font-medium">Select rooms</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 align-top border-r border-gray-200">
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Deluxe Suite
                </a>

                <div className="mt-2">
                  <div className="font-medium">
                    Bedroom 1: <span className="font-normal">1 double bed</span>{" "}
                    <span className="inline-block ml-1">🛏️</span>
                  </div>
                  <div className="font-medium">
                    Living room: <span className="font-normal">1 sofa bed</span>{" "}
                    <span className="inline-block ml-1">🛋️</span>
                  </div>
                </div>

                <div className="flex items-center mt-3 text-sm">
                  <span className="inline-flex items-center mr-3">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                    37 m²
                  </span>
                  <span className="inline-flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Balcony
                  </span>
                </div>

                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    Air conditioning
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8.342a2 2 0 00-.602-1.43l-4.44-4.342A2 2 0 0013.56 2H6a2 2 0 00-2 2z"
                      />
                    </svg>
                    Private bathroom
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Flat-screen TV
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                    Free WiFi
                  </div>
                </div>

                <div className="mt-3 space-y-1 text-sm">
                  {[
                    "Free toiletries",
                    "Shower",
                    "Safety deposit box",
                    "Toilet",
                    "Towels",
                    "Linen",
                    "Desk",
                    "Slippers",
                    "Fan",
                    "Towels/sheets (extra fee)",
                    "Wake-up service",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Toilet paper",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </td>

              <td className="p-4 align-top border-r border-gray-200">
                <div className="flex justify-center">
                  <div className="flex">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <svg className="h-5 w-5 -ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </td>

              <td className="p-4 align-top border-r border-gray-200">
                <div className="font-bold text-lg">BDT 97,200</div>
                <div className="text-sm text-gray-600">+BDT 16,038 taxes and charges</div>
              </td>

              <td className="p-4 align-top border-r border-gray-200">
                <div className="flex items-start mb-3">
                  <Coffee className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-green-600 font-medium">Buffet breakfast included</span>
                </div>

                <div className="flex items-start mb-3">
                  <Clock className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                  <span className="font-medium">Costs 1st night to cancel</span>
                </div>

                <div className="flex items-start mb-3">
                  <Check className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">No prepayment needed</span>
                    <span> – pay at the property</span>
                  </div>
                </div>

                <div className="flex items-start mb-3">
                  <CreditCard className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-green-600 font-medium">No credit card needed</span>
                </div>

                <div className="ml-7">
                  <div className="flex items-center text-red-600">
                    <span className="mr-1">•</span>
                    <span>Only 4 left on our site</span>
                  </div>
                </div>
              </td>

              <td className="p-4 align-top">
                <div className="flex flex-col items-center">
                  <select className="border border-gray-300 rounded p-2 mb-3 w-full">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>

                  <button className="bg-blue-600 text-white py-3 px-4 rounded w-full font-medium hover:bg-blue-700 transition duration-200 mb-3">
                    Continue to book
                  </button>

                  <div className="flex items-center text-sm">
                    <span className="mr-2">•</span>
                    <span>Confirmation is immediate</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Limited Supply Warning */}
      <div className="mt-6 border border-gray-200 rounded-md p-4">
        <div className="flex items-start">
          <div className="text-red-600 mr-3">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium">
              Limited supply in Cox's Bazar for your dates:{" "}
              <span className="font-normal">27 hotels like this are already unavailable on our site</span>
            </p>
          </div>
        </div>
      </div>

      {/* No Credit Card Needed */}
      <div className="mt-4 border border-gray-200 rounded-md p-4">
        <div className="flex items-start">
          <div className="text-green-600 mr-3">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium">
              No credit card needed <span className="font-normal">All options are bookable without a credit card.</span>
            </p>
          </div>
        </div>
      </div>

      <GuestReviews></GuestReviews>
    </div>
  )
}

