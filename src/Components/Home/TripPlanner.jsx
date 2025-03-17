export default function TripPlanner() {
    const categories = [
      { name: "City", icon: "🏙️" },
      { name: "Beach", icon: "🏖️" },
      { name: "Outdoors", icon: "🚴" },
      { name: "Relax", icon: "🧘" },
      { name: "Romance", icon: "❤️" },
      { name: "Food", icon: "🍜" },
    ];
  
    return (
      <div className="max-w-[1200px] mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2">Quick and easy trip planner</h1>
        <p className="text-gray-600 mb-4">
          Pick a vibe and explore the top destinations in Bangladesh
        </p>
  
        <div className="flex gap-6 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
  
        <div className="w-48 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://www.bproperty.com/blog/wp-content/uploads/Tea-2.jpg"
            alt="Sylhet"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <div className="p-1">
          <h3 className="font-semibold">Sylhet</h3>
          <p className="text-gray-500">191 km away</p>
          </div>
        </div>
      </div>
    );
  }
  