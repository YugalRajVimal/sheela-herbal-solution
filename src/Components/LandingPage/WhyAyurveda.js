import React from "react";
import { Leaf, Users, Award, Pill } from "lucide-react"; // icons from lucide-react

const features = [
  {
    icon: <Leaf size={36} />,
    title: "100% Organic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    icon: <Users size={36} />,
    title: "3rd Party Tested",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    icon: <Award size={36} />,
    title: "Certified Medicine",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    icon: <Pill size={36} />,
    title: "Reduce Pain",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

const WhyAyurveda = () => {
  return (
    <section className="w-screen z-20 py-16 px-6 bg-[#82b440] relative overflow-hidden">
      {/* Background triangles */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
      conic-gradient(from 0deg at 50% 0%, white 0 130deg, transparent 0 360deg)
    `,
          backgroundSize: "30px 30px",
          WebkitMaskImage:
            "linear-gradient(to bottom left, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(to bottom left, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          maskRepeat: "no-repeat",
          maskSize: "cover",
          opacity: 1, // keep triangles fully opaque, mask handles fading
        }}
      ></div>
      <div className="text-center w-full">
        <p className="text-white text-sm font-medium uppercase tracking-wider text-center ">
          Best For You
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center ">
          Why Pure Ayurveda
        </h2>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-20 flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="md:w-[60%] w-full">
          <div className="grid sm:grid-cols-2 gap-10 text-center md:text-left w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-center"
              >
                <div className="text-white mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-center text-sm leading-relaxed ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[40%] w-full flex justify-center">
          <img
            src="/LandingPage/top-img.png" // replace with your image
            alt="Ayurveda"
            className="rounded-lg shadow-lg max-w-sm md:max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyAyurveda;
