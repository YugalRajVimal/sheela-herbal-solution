import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-green-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const TrendingProducts = ({
  handleToggleOilCardOpen,
  handleToggleCapsuleCardOpen,
}) => {
  const products = [
    {
      id: 1,
      name: "Psoriasis Oil",
      image: "/LandingPage/b4.png", // Update with the correct image URL
      rating: 4,
      oldPrice: 150,
      price: 140,
      funct: "/products/psoriasis-oil",
    },
    {
      id: 2,
      name: "Psoriasis Capsule",
      image: "/LandingPage/b3.png", // Update with the correct image URL
      rating: 4,
      oldPrice: 100,
      price: 90,
      funct: "/products/psoriasis-capsule",
    },
  ];
  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-green-600 font-medium">Product</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          TRENDING PRODUCT
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".tproducts-button-next",
            prevEl: ".tproducts-button-prev",
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                to={product.funct}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 mx-auto object-contain mb-6"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <StarRating rating={product.rating} />
                <div className="flex justify-center items-center gap-3 mt-2">
                  <span className="line-through text-gray-500">
                    ${product.oldPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    ${product.price}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button className="tproducts-button-prev bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600">
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button className="tproducts-button-next bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
