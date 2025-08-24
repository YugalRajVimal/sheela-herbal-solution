import React, { useEffect } from "react";
import HeroSection from "../Components/LandingPage/HeroSection";
import NavBar from "../Components/NavBar";
import KUTE from "kute.js";
import ProductsSection from "../Components/LandingPage/ProductsSection";
import WhyAyurveda from "../Components/LandingPage/WhyAyurveda";
import TopProducts from "../Components/LandingPage/TopProducts";
import Achievements from "../Components/LandingPage/Achievements";
import CustomerReview from "../Components/LandingPage/CustomerReview";
import TrendingProducts from "../Components/LandingPage/TrendingProducts";
import BlogSection from "../Components/LandingPage/BlogSection";

const LandingPage = () => {
  return (
    <section className=" w-screen text-right">
      <div
        style={{
          backgroundImage: "url(/LandingPage/heroBG.jpeg)",
          backgroundSize: "cover",
          height: "85vh",
        }}
        className="curve z-50 relative bg-right md:bg-center"
      >
        <NavBar />
        <HeroSection />
        <div className="custom-shape-divider-bottom-1756041555">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <ProductsSection />
      <WhyAyurveda />
      <TopProducts />
      <Achievements />
      <CustomerReview />
      <TrendingProducts />
      <BlogSection />
    </section>
  );
};

export default LandingPage;
