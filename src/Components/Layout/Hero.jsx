"use client";

const Hero = () => (
  <div
    className="bg-cover bg-center h-[300px] sm:h-[300px] flex items-center justify-center text-white text-center"
    style={{
      // backgroundImage:
      //   'url("https://q-xx.bstatic.com/xdata/images/xphoto/720x217/461012046.jpeg?k=edbf573a700063283054807b713640b3aa483f0595b61d4a016ca8f6e3814b35&o=%20720w,%20https://r-xx.bstatic.com/xdata/images/xphoto/1440x434/461012046.jpeg?k=edbf573a700063283054807b713640b3aa483f0595b61d4a016ca8f6e3814b35&o=%201440w,%20https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/461012046.jpeg?k=edbf573a700063283054807b713640b3aa483f0595b61d4a016ca8f6e3814b35&o=%202880w")',
      backgroundColor: '#003580'
    }}
  >
    <div className="px-4">
      <h2 className="text-3xl sm:text-5xl font-bold mb-5">
        A place to call home on your next adventure
      </h2>
      <p className="text-lg sm:text-2xl mb-5">
        Discover dreamy villas, houses, cabins & more
      </p>
      <button className="bg-[#0071c2] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-lg">
        Find yours
      </button>
    </div>
  </div>
);

export default Hero;