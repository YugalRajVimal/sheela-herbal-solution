import React from "react";
import { CheckCircle, Leaf, Droplets, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CapsuleProduct2 = () => {
  const sendWhatsAppMessage = () => {
    const message = "I'm interested in the Psoriasis Natural Capsule";
    const phoneNumber = "+919389528675"; // Enter target number here
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="h-screen w-screen fixed z-50 top-0 left-0 bg-black/70 py-20 px-4 md:px-12 lg:px-24 overflow-y-auto">
      {/* Heading */}
      <div className="p-4 bg-white w-full rounded-md">
        <div className="flex w-full">
          <div className="w-2/3">
            <h1 className="text-3xl md:text-5xl text-left font-bold font-montserrat tracking-tight text-green-800">
              Psoriasis Herbal Capsule 💊
            </h1>
            <p className="text-1xl md:text-3xl text-left font-bold font-montserrat tracking-tight text-green-800">
              Inner Ayurvedic Formula for Skin Wellness
            </p>
            <p className="text-lg font-semibold text-green-800 mt-2">
              Cost: ₹{1599}
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-start">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                  stroke="red"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-roboto text-lg">
            An Ayurvedic capsule blend crafted with native Indian botanicals to cleanse from inside, regulate immune function, and help ongoing relief from psoriasis challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Product Visual */}
          <div className="relative">
            <img
              src="/cap2.jpeg"
              alt="Psoriasis Herbal Capsule"
              className="w-full h-auto rounded-2xl shadow-lg border"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
              Completely Herbal • Steroid-Free
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Main Advantages */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              ✨ Core Advantages
            </h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              {[
                "Cleanses blood & eliminates toxins",
                "Boosts immune responses & stabilizes Pitta",
                "Decreases eruptions, flaking & redness",
                "Promotes skin restoration from within",
                "Pure Herbal, Secure & Not Habit-Forming",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Active Components */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              🍃 Composition (Potent Ayurvedic Mix)
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Neem:</span> Cleanses blood, diminishes skin swelling
              </li>
              <li>
                <span className="font-semibold">Manjistha:</span> Detoxes, enhances skin radiance
              </li>
              <li>
                <span className="font-semibold">Turmeric (Haldi):</span>{" "}
                Soothes inflammation & provides antioxidants
              </li>
              <li>
                <span className="font-semibold">Guduchi (Giloy):</span> Improves immune function & balances body energies
              </li>
              <li>
                <span className="font-semibold">Haridra + Triphala:</span> Promotes digestion & boosts dermal strength
              </li>
            </ul>

            {/* Directions for Use */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              🌱 Usage Instructions
            </h2>
            <p className="text-gray-700 mb-6">
              Consume 1–2 capsules twice a day after food with warm water, or as advised by your healthcare expert. Maintain regular use for best outcomes.
            </p>

            {/* Quality Certifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Leaf className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Pure Herbal</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Droplets className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Zero Steroids</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Shield className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Appropriate for Prolonged Use</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <CheckCircle className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Approved Ayurveda</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center md:text-left">
              <button
                onClick={sendWhatsAppMessage}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
              >
                🛒 Order Now – Restore Organically
              </button>
              <p className="text-gray-500 text-sm mt-3">
                ✨ 100% Natural | No Steroids | Suitable for Daily Regimen | Non-Addictive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapsuleProduct2;
