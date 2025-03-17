export default function TravelPromo() {
    return (
      <div className="max-w-[1200px] mx-auto mt-5">
        {/* Sign-in Promo Section */}
        <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-between shadow-md">
          <div>
            <h2 className="text-xl font-bold">Sign in, save money</h2>
            <p className="text-gray-600 text-sm mt-1">
              Save 10% or more at participating properties - just look for the blue Genius label
            </p>
            <div className="mt-3 space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign in</button>
              <button className="text-blue-600">Register</button>
            </div>
          </div>
          <div>
            <div className="bg-blue-500 p-4 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold">Genius</span>
            </div>
          </div>
        </div>
  
  
        {/* Footer Section */}
        <footer className="bg-gray-200 p-6 mt-6 text-gray-700 text-sm">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold">Support</h3>
              <ul className="mt-2 space-y-1">
                <li>Coronavirus (COVID-19) FAQs</li>
                <li>Manage your trips</li>
                <li>Contact Customer Service</li>
                <li>Safety resource centre</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Discover</h3>
              <ul className="mt-2 space-y-1">
                <li>Genius loyalty programme</li>
                <li>Seasonal and holiday deals</li>
                <li>Travel articles</li>
                <li>Booking.com for Business</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Terms and settings</h3>
              <ul className="mt-2 space-y-1">
                <li>Privacy & cookies</li>
                <li>Terms and conditions</li>
                <li>Partner dispute</li>
                <li>Human Rights Statement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Partners</h3>
              <ul className="mt-2 space-y-1">
                <li>Extranet login</li>
                <li>Partner help</li>
                <li>List your property</li>
                <li>Become an affiliate</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  