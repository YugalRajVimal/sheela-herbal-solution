import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Ramesh Kumar",
    text: "I have been using Sheela Herbal Psoriasis Oil for 2 months and the itching has reduced a lot. My skin feels much calmer and healthier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Pooja Sharma",
    text: "The Psoriasis Capsules have worked wonders for me. Within weeks, my patches started to fade and I feel more confident now.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Verma",
    text: "I tried many products before, but Sheela Herbal’s oil gave real relief. It’s natural, effective, and has no side effects.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 4,
    name: "Neha Patel",
    text: "Very happy with the results. My skin irritation has gone down and I feel more comfortable in my daily life. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

const CustomerReview = () => {
  return (
    <section
      className="relative w-screen py-20 px-6 bg-cover bg-center mt-40"
      style={{
        backgroundImage: "url(/LandingPage/reviewBG.png)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-white text-center">
        <p className="text-lg font-medium">Feedback</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          CUSTOMER REVIEW
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="px-6"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10  rounded-2xl p-8 md:p-12 shadow-lg">
                {/* Image */}
                <div className="relative h-fit w-fit flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-64 h-72 object-cover rounded-2xl shadow-lg"
                  />
                  <div
                    className="absolute z-[-1] h-full w-1/2 h-full left-0 top-0 scale-[1.5] "
                    style={{
                      backgroundImage:
                        "radial-gradient(white 1.5px, transparent 1.5px)",
                      backgroundSize: "20px 20px", // spacing between dots
                    }}
                  ></div>
                  <div className="absolute z-[-1] -right-[50px] -top-[50px] bg-white/50 rounded-full h-[100px] aspect-[1/1]"></div>
                </div>

                {/* Text */}
                <div className="text-left max-w-xl">
                  <h3 className="text-2xl font-semibold mb-4">{review.name}</h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {review.text}
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium shadow-md">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute bottom-8 right-24 flex flex-row-reverse gap-4">
          <button className="swiper-button-prev text-green-500 p-3 rounded-full shadow-md"></button>
        </div>
        <div className="absolute bottom-8 right-0 flex flex-row-reverse gap-4">
          <button className="swiper-button-next text-green-500 p-3 rounded-full shadow-md"></button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
