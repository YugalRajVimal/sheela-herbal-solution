import React, { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const TopProducts = ({
  handleToggleOilCardOpen,
  handleToggleCapsuleCardOpen,
}) => {
  const products = [
    {
      name: "Psoriasis Oil",
      image: "/oil.jpeg", // Update with the correct image URL
      rating: 5,
      oldPrice: 999,
      newPrice: 650,
      funct: "/products/psoriasis-oil",
    },
    {
      name: "Psoriasis Capsule",
      image: "/cap.jpeg", // Update with the correct image URL
      rating: 5,
      oldPrice: 3500,
      newPrice: 2299,
      funct: "/products/psoriasis-capsule",
    },
    {
      name: "Psoriasis Capsule",
      image: "/cap2.jpeg", // Update with the correct image URL
      rating: 5,
      oldPrice: 3500,
      newPrice: 2299,
      funct: "/products/psoriasis-capsule",
    },
  ];
  return (
    <section id="products" className="w-screen py-16 px-6 bg-white">
      <div className="max-w-7xl w-full mx-auto text-center">
        <p className="text-[#82b440] font-medium text-sm uppercase">Medicine</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Top Products
        </h2>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              to={product.funct}
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-between text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className=" h-40 object-contain mb-4 rounded-md"
              />

              <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mb-2 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className={
                      star <= product.rating
                        ? "text-[#82b440] fill-[#82b440]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Prices */}
              <div className="flex items-center gap-3">
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice}
                </span>
                <span className="text-[#82b440] font-semibold">
                  ₹{product.newPrice}
                </span>
              </div>

              </div>
         
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
