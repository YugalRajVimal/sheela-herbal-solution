import React from "react";

const products = [
  {
    img: "/LandingPage/p1.jpg",
    title: "Herbal Medicine",
    subtitle: "Pure Ayurveda",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip",
  },
  {
    img: "/LandingPage/p2.jpg",
    title: "Fresh Product",
    subtitle: "Herbal Medicine",
    description:
      "Gt enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip",
  },
  {
    img: "/LandingPage/p3.jpg",
    title: "Total Care",
    subtitle: "Pure Herbal",
    description:
      "Ht enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip",
  },
];

const ProductsSection = () => {
  return (
    <section  className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Herbal Solutions
        </h2>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Discover nature’s best remedies crafted with care and tradition
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products?.map((item, index) => (
          <div
            key={index}
            className="group bg-white shadow-md hover:shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 hover:border-green-200 hover:translate-y-[-6px] hover:border-b-[4px] hover:border-b-green-500"
          >
            <div className="w-32 h-32 mb-6 flex items-center justify-center  rounded-full group-hover:bg-green-100 transition-colors duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-green-600 font-medium mb-3">{item.subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
