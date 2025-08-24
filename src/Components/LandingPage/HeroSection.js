import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[85vh] w-screen flex">
      <div className="w-0 md:w-1/2 h-full"></div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center text-left px-4">
        <div className="max-w-lg">
          {/* Small Heading */}
          <p className="text-green-600 italic font-semibold text-base md:text-lg mb-2">
            {/* Aloevera Cream */}
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Sheela Herbal Solution
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Sheela Herbal Company offers natural remedies for skin wellness,
            specializing in Psoriasis Oil and Psoriasis Capsules. With a
            commitment to quality and traditional herbal care, we help people
            find safe, natural relief.
          </p>

          {/* Button */}
          <a
            href="#products"
            className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Get Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
