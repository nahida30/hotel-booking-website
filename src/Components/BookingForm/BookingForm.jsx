import { Clock, Tag, Check, ChevronDown, ChevronRight, CreditCard } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
    
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Booking Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white">
              <Check className="w-5 h-5" />
            </div>
            <div className="ml-2 font-medium">Your selection</div>
            <div className="border-t-2 border-blue-600 w-24 sm:w-40 md:w-60 mx-2"></div>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white">2</div>
            <div className="ml-2 font-medium">Your details</div>
            <div className="border-t-2 border-gray-300 w-24 sm:w-40 md:w-60 mx-2"></div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-500">3</div>
            <div className="ml-2 font-medium text-gray-500">Finish booking</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Hotel Information */}
          <div className="border border-gray-200 rounded-md p-4">
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600">Hotel</span>
              <div className="flex ml-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Hotel Regal Palace</h2>
            <p className="text-gray-600 text-sm mb-3">
              Plot # 48, Bloc # B, Kolatoli Rd, Cox's Bazar, Bangladesh, 4700 Cox's Bazar, Bangladesh
            </p>

            <div className="flex items-center mb-3">
              <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-md text-sm mr-2">6.0</div>
              <span className="text-gray-700 mr-2">Pleasant</span>
              <span className="text-gray-500 text-sm">· 15 real reviews</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Parking</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Restaurant</span>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-bold text-lg mb-4">Your booking details</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-gray-600 text-sm">Check-in</div>
                <div className="font-bold">Sun 23 Mar 2025</div>
                <div className="text-gray-600 text-sm">From 12:00</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Check-out</div>
                <div className="font-bold">Sat 12 Apr 2025</div>
                <div className="text-gray-600 text-sm">Until 11:00</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-gray-600 text-sm">Total length of stay:</div>
              <div className="font-bold">20 nights</div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">You selected</div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="font-bold">1 room for 2 adults</div>
              <button className="text-blue-600 mt-2 hover:underline">Change your selection</button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <h3 className="font-bold text-lg p-4 border-b border-gray-200">Your price summary</h3>

            <div className="bg-blue-50 p-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">Price</h4>
                <div className="text-right">
                  <div className="text-xl font-bold">BDT 70,470.02</div>
                  <div className="text-sm text-gray-600">+BDT 11,628 taxes and charges</div>
                  <div className="text-sm text-gray-600">In property currency: US$580</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-bold mb-3">Price information</h4>

              <div className="flex items-start mb-3">
                <CreditCard className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Excludes BDT 11,627.55 in taxes and charges</div>
                  <div className="flex justify-between mt-1">
                    <div>16.50 % Tax</div>
                    <div>BDT 11,627.55</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start mb-3">
                <svg
                  className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div>
                    This price is converted to show you the approximate cost in BDT. You'll pay in{" "}
                    <span className="font-bold">US$</span> or <span className="font-bold">BDT</span>. The exchange rate
                    may change before you pay.
                  </div>
                </div>
              </div>

              <div className="flex items-start mb-3">
                <svg
                  className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div>Bear in mind that your card issuer may charge you a foreign transaction fee.</div>
                </div>
              </div>

              <button className="text-blue-600 hover:underline">Hide details</button>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-bold text-lg mb-3">Your payment schedule</h3>
            <p>You will be charged a prepayment of the cost of the first night after reservation.</p>
          </div>

          {/* Cancellation Cost */}
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-bold text-lg mb-3">How much will it cost to cancel?</h3>
            <div className="flex justify-between">
              <div>If you cancel, you'll pay</div>
              <div className="font-bold">BDT 2,066</div>
            </div>
          </div>

          {/* Limited Supply Warning */}
          <div className="border border-red-100 bg-red-50 rounded-md p-4">
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Limited supply for your dates:</h3>
                <p>21 three-star hotels like this are already unavailable on our site</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sign In */}
          <div className="border border-gray-200 rounded-md p-4">
            <div className="flex items-center">
              <div className="text-blue-600 mr-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-blue-600 hover:underline cursor-pointer">Sign in</span> to book with your saved
                details or <span className="text-blue-600 hover:underline cursor-pointer">register</span> to manage your
                bookings on the go!
              </div>
            </div>
          </div>

          {/* Enter Your Details */}
          <div className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-6">Enter your details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="First name" />
              </div>
              <div>
                <label className="block mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Last name" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Email address"
              />
              <div className="text-sm text-gray-600 mt-1">Confirmation email goes to this address</div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Country/region <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md p-2 appearance-none">
                  <option>Bangladesh</option>
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                <div className="relative col-span-1">
                  <select className="w-full border border-gray-300 rounded-md p-2 appearance-none">
                    <option>BD +880</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
                </div>
                <div className="col-span-2 md:col-span-3">
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-1">Needed by the property to validate your booking</div>
            </div>

            <div className="mb-4">
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" id="paperless" defaultChecked />
                <label htmlFor="paperless">
                  <div className="font-medium">Yes, I'd like free paperless confirmation (recommended)</div>
                  <div className="text-sm text-gray-600">We'll text you a link to download our app</div>
                </label>
              </div>
            </div>
          </div>

          {/* Who are you booking for */}
          <div className="border border-gray-200 rounded-md p-4">
            <div className="mb-4">
              <div className="mb-1">Who are you booking for? (optional)</div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input type="radio" id="main-guest" name="booking-for" className="mr-2" defaultChecked />
                  <label htmlFor="main-guest">I am the main guest</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="someone-else" name="booking-for" className="mr-2" />
                  <label htmlFor="someone-else">Booking is for someone else</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-1">Are you travelling for work? (optional)</div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input type="radio" id="work-yes" name="work-travel" className="mr-2" />
                  <label htmlFor="work-yes">Yes</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="work-no" name="work-travel" className="mr-2" defaultChecked />
                  <label htmlFor="work-no">No</label>
                </div>
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-4">Deluxe Double Room</h2>

            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8 11h8v5H8v-5z"
                  />
                </svg>
                <div className="text-green-600 font-medium">Breakfast included in the price</div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-gray-600 mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div className="font-medium">
                  Partially refundable <span className="text-blue-600 ml-1">ⓘ</span>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-gray-600 mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div className="font-medium">
                  Guests: 2 adults <span className="text-blue-600 ml-1">ⓘ</span>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-gray-600 mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                <div>No smoking</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Full guest name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="First name, Last name"
              />
            </div>
          </div>

          {/* Add to your stay */}
          <div className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-4">Add to your stay</h2>

            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" id="car-rental" />
              <div className="flex-1">
                <label htmlFor="car-rental" className="font-medium">
                  I'm interested in renting a car with 10% off
                </label>
                <p className="text-sm text-gray-600">
                  Save 10% on all rental cars when you book with us - we'll add car hire options in your booking
                  confirmation.
                </p>
              </div>
              <div className="ml-4">
                <svg className="h-10 w-10 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-4">Special requests</h2>

            <p className="mb-4">
              Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can
              always make a special request after your booking is complete!
            </p>

            <div className="mb-4">
              <label className="block mb-1">Please write your requests in English. (optional)</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 h-32"
                placeholder="I'd like a room with a view..."
              ></textarea>
            </div>
          </div>

          {/* Arrival Time */}
          <div className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-4">Your arrival time</h2>

            <div className="space-y-4 mb-4">
              <div className="flex items-start">
                <div className="text-green-600 mr-3 mt-0.5">
                  <Check className="h-5 w-5" />
                </div>
                <div>Your room will be ready for check-in at 12:00</div>
              </div>

              <div className="flex items-start">
                <div className="text-green-600 mr-3 mt-0.5">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>24-hour front desk – Help whenever you need it!</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Add your estimated arrival time (optional)</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md p-2 appearance-none">
                  <option>Please select</option>
                  <option>12:00 - 13:00</option>
                  <option>13:00 - 14:00</option>
                  <option>14:00 - 15:00</option>
                  <option>15:00 - 16:00</option>
                  <option>16:00 - 17:00</option>
                  <option>17:00 - 18:00</option>
                  <option>18:00 - 19:00</option>
                  <option>19:00 - 20:00</option>
                  <option>20:00 - 21:00</option>
                  <option>21:00 - 22:00</option>
                  <option>22:00 - 23:00</option>
                  <option>23:00 - 00:00</option>
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
              </div>
              <div className="text-sm text-gray-600 mt-1">Time is for Cox's Bazar time zone</div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
            <div className="flex items-center mb-4 sm:mb-0">
              <Tag className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">We Price Match</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <a href="#" className="text-blue-600 hover:underline mb-4 sm:mb-0 sm:mr-6">
                What are my booking conditions?
              </a>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-200 flex items-center">
                Next: Final details
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

