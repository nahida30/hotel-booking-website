"use client";

import { useState } from 'react';

const filterOptions = {
    'Popular filters for Cox\'s Bazar': [
      'Book without credit card',
      'No prepayment',
      'Free cancellation',
      'Sea view',
      'Free WiFi',
      'Beach'
    ],
    'Reservation policy': [
      'Free cancellation',
      'Book without credit card',
      'No prepayment'
    ],
    'Property type': [
      'Hotels',
      'Entire homes & apartments',
      'Resorts'
    ],
    'Meals': [
      'Breakfast included',
      'Self catering'
    ],
    'Property rating': [
      '1 star',
      '2 stars',
      '4 stars'
    ],
    'Beach access': [
      'Beachfront'
    ],
    'Bedrooms and bathrooms': [
      'Bedrooms: 0',
      'Bathrooms: 0'
    ],
    'Fun things to do': [
      'Beach',
      'Kids\' club',
      'Spa and wellness centre',
      'Fitness centre',
      'Fitness'
    ],
    'Property accessibility': [
      'Auditory guidance',
      'Higher level toilet',
      'Lower bathroom sink'
    ],
    'Room accessibility': [
      'Upper floors accessible by elevator'
    ],
    'Facilities': [
      'Parking',
      'Restaurant',
      'Room service',
      '24-hour front desk',
      'Fitness centre'
    ],
    'Room facilities': [
      'Sea view',
      'Balcony',
      'Private bathroom',
      'Air conditioning',
      'Bath'
    ],
    'Bed preference': [
      'Double bed',
      'Twin beds'
    ],
    'Review score': [
      'Good: 7+',
      'Pleasant: 6+'
    ],
    'Distance from centre of Cox\'s Bazar': [
      'Less than 1 km',
      'Less than 3 km',
      'Less than 5 km'
    ]
  };
  

export default function SearchResults() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = (category, option) => {
    setSelectedFilters((prevFilters) => {
      const updatedCategory = prevFilters[category] || [];

      const updatedFilters = updatedCategory.includes(option)
        ? updatedCategory.filter((item) => item !== option)
        : [...updatedCategory, option];

      return { ...prevFilters, [category]: updatedFilters };
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Sidebar for Filters */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Filter by:</h2>
          <div className="mb-6">
            <h3 className="text-sm font-medium">Your budget (per night)</h3>
            <input type="range" min="1000" max="8000" className="w-full mt-2" />
          </div>

          {/* Dynamic Filter Sections */}
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-medium mb-2">{category}</h3>
              {options.map((option) => (
                <div key={option} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={(selectedFilters[category] || []).includes(option)}
                    onChange={() => handleCheckboxChange(category, option)}
                  />
                  <label className="text-sm">{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section for Search Results */}
        <div className="col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Cox's Bazar: 59 properties found</h1>
            <button className="border border-gray-300 rounded-lg px-4 py-1">
              Sort by: Top picks for long stays
            </button>
          </div>

          {/* Sample Hotel Data */}
          {[
            {
                name: 'Laguna Beach Hotel & Resort',
                rating: 5.7,
                price: '62,694',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHFyGj0c1K-Mk106ZGT-juvcp-4Z8aMocHw&s',
                distance: '1.9 km from centre',
                info: '450 m from beach',
                perks: ['Breakfast included']
              },
              {
                name: 'Falcon Beach Resort',
                rating: 6.5,
                price: '59,025',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_79VVhphnq0PIVsee9XCAfIeFLFqBu_pXw&s',
                distance: '3.1 km from centre',
                info: '200 m from beach',
                perks: ['Free cancellation', 'No prepayment needed']
              },
              {
                name: 'Coral Reef Resort',
                rating: 8.2,
                price: '70,500',
                image: 'https://www.salamanderdc.com/images/hero/full/LivingRoomReimagined-1920x1200.jpg',
                distance: '500 m from centre',
                info: 'Beachfront property',
                perks: ['Free breakfast', 'Sea view']
              },
              {
                name: 'Ocean Paradise Hotel',
                rating: 7.9,
                price: '55,000',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN4wL0OVMx2QzZtO1-rrZO-Sn1o8-pK7H6A&s',
                distance: '1.2 km from centre',
                info: 'Near local market',
                perks: ['Free WiFi', 'Swimming pool']
              },
              {
                name: 'Seagull Hotel',
                rating: 6.8,
                price: '45,000',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmBAZNHH2gGOmM-JPVuMU0hAKVnFYB8TPoA&s',
                distance: '2.5 km from centre',
                info: '200 m from beach',
                perks: ['Free cancellation', 'Breakfast included']
              },
              {
                name: 'Royal Tulip Resort',
                rating: 9.1,
                price: '90,000',
                image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg',
                distance: '700 m from centre',
                info: 'Luxurious property',
                perks: ['Private beach', 'Spa services']
              },
              {
                name: 'Beachfront Inn',
                rating: 7.3,
                price: '52,000',
                image: 'https://thatsup.website/storage/211/47997/Hotel-Ka%CC%88mp---Lobby2.jpg?v=1734422741',
                distance: '1 km from centre',
                info: 'Great for families',
                perks: ['Kids play area', 'Free parking']
              },
              {
                name: 'Sunset Bay Resort',
                rating: 8.0,
                price: '65,000',
                image: 'https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg',
                distance: '300 m from centre',
                info: 'Stunning sunset view',
                perks: ['Free WiFi', 'Swimming pool']
              },
              {
                name: 'Palm Grove Hotel',
                rating: 7.5,
                price: '58,000',
                image: 'https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=',
                distance: '900 m from centre',
                info: 'Peaceful environment',
                perks: ['Free cancellation', 'No prepayment needed']
              },
              {
                name: 'Golden Sands Resort',
                rating: 8.5,
                price: '78,000',
                image: 'https://www.lemontreehotels.com/uploads/hotelslider/66692d97eca5dFacade%20%20(1).jpg',
                distance: '2 km from centre',
                info: 'Exclusive private beach',
                perks: ['Breakfast included', 'Spa services']
              },
              {
                name: 'Cox’s Haven',
                rating: 6.2,
                price: '40,000',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHWiuO4GlBpUSQ6y8I1L6khU1WCOQhLU5Pw&s',
                distance: '4 km from centre',
                info: 'Affordable stay',
                perks: ['Free WiFi', 'Parking included']
              },
              {
                name: 'The Wave Resort',
                rating: 8.8,
                price: '85,000',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWMPreXboMoHMjXm_FoynvJKtpquk45kvnw&s',
                distance: '600 m from centre',
                info: 'Luxury experience',
                perks: ['Private beach', 'Outdoor pool']
              }
          ].map((hotel, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex gap-4">
              <img src={hotel.image} alt={hotel.name} className="w-36 h-36 rounded-lg object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-blue-600">{hotel.name}</h2>
                <p className="text-sm text-gray-500">{hotel.distance} • {hotel.info}</p>
                <p className="text-sm font-medium mt-2">Deluxe Double Room • 1 double bed</p>
                <p className="text-green-600 text-sm mt-1">{hotel.perks.join(' • ')}</p>
              </div>
              <div className="text-right">
                <div className="text-sm bg-gray-800 text-white px-2 py-1 rounded-md inline-block mb-2">{hotel.rating}</div>
                <p className="text-lg font-bold">BDT {hotel.price}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-lg">See availability</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
