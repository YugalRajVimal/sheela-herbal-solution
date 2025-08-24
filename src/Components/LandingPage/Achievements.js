import React from "react";
import { Award, Smile, Package, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Award size={40} className="text-green-600" />,
    value: "25",
    label: "Years Experience",
  },
  {
    icon: <Smile size={40} className="text-green-600" />,
    value: "50 k+",
    label: "Happy Customers",
  },
  {
    icon: <Package size={40} className="text-green-600" />,
    value: "800 +",
    label: "Products",
  },
  {
    icon: <ShieldCheck size={40} className="text-green-600" />,
    value: "100 %",
    label: "Product Purity",
  },
];

const Achievements = () => {
  return (
    <section
      className="relative w-screen  pt-16 px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/LandingPage/statsBG.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white">
        <p className="text-lg font-medium ">Our Recent Achievements</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 ">
          BENEFIT FROM CHOOSING THE BEST
        </h2>
      </div>
      {/* Stats Grid */}
      <div className="grid z-10 gap-8 sm:grid-cols-2 md:grid-cols-4 md:translate-y-[50%] mx-auto mb:mt-0 mt-10 md:pb-0 pb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white z-20 text-gray-900 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
