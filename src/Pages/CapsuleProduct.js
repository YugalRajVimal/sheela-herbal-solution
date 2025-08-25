import React from "react";
import { CheckCircle, Leaf, Droplets, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CapsuleProduct = () => {
  const sendWhatsAppMessage = () => {
    const message = "I am interested in the Psoriasis Herbal Capsule";
    const phoneNumber = "+919389528675"; // Replace with the desired phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="h-screen w-screen fixed z-50 top-0 left-0 bg-black/70 py-20 px-4 md:px-12 lg:px-24 overflow-y-auto">
      {/* Header */}
      <div className="p-4 bg-white w-full rounded-md">
        <div className="flex w-full">
          <div className="w-2/3">
            <h1 className="text-3xl md:text-5xl text-left font-bold font-montserrat tracking-tight text-green-800">
              Psoriasis Herbal Capsule 💊
            </h1>
            <p className="text-1xl md:text-3xl text-left font-bold font-montserrat tracking-tight text-green-800">
              Internal Ayurvedic Support for Skin Healing
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
            An Ayurvedic capsule formulation made with Indian herbs that works
            from within to detoxify, balance immunity, and support long-term
            relief from psoriasis symptoms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <img
              src="/LandingPage/p3.jpg"
              alt="Psoriasis Herbal Capsule"
              className="w-full h-auto rounded-2xl shadow-lg border"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
              100% Herbal • No Steroids
            </div>
          </div>

          {/* Product Content */}
          <div>
            {/* Benefits */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              ✨ Key Benefits
            </h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              {[
                "Purifies blood & detoxifies the body",
                "Strengthens immunity & balances Pitta",
                "Reduces flare-ups, scaling & redness",
                "Supports skin healing from inside",
                "100% Herbal, Safe & Non-Habit Forming",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Ingredients */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              🍃 Ingredients (Powerful Ayurvedic Blend)
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Neem:</span> Blood purifier,
                reduces skin inflammation
              </li>
              <li>
                <span className="font-semibold">Manjistha:</span> Detoxifies,
                improves skin glow
              </li>
              <li>
                <span className="font-semibold">Turmeric (Haldi):</span>{" "}
                Anti-inflammatory & antioxidant
              </li>
              <li>
                <span className="font-semibold">Guduchi (Giloy):</span> Boosts
                immunity & balances doshas
              </li>
              <li>
                <span className="font-semibold">Haridra + Triphala:</span> Aids
                digestion & supports skin health
              </li>
            </ul>

            {/* Usage */}
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4 text-green-800">
              🌱 How to Use
            </h2>
            <p className="text-gray-700 mb-6">
              Take 1–2 capsules twice daily after meals with warm water, or as
              directed by your physician. Use consistently for long-term
              benefits.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Leaf className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">100% Herbal</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Droplets className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">No Steroids</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <Shield className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Safe for Long-Term Use</p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-sm text-center">
                <CheckCircle className="text-green-600 w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Ayurveda Certified</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-left">
              <button
                onClick={sendWhatsAppMessage}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
              >
                🛒 Buy Now – Heal Naturally
              </button>
              <p className="text-gray-500 text-sm mt-3">
                ✨ 100% Herbal | No Steroids | Safe for Daily Use | Non-Habit
                Forming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapsuleProduct;
