import React from "react";
import { Heart, Eye, Share2 } from "lucide-react";

const blogs = [
  {
    id: 1,
    image: "/LandingPage/b2.png",
    title: "Duis aute irure dolor in velit voluptate esse",
    description:
      "Ut turpis purus, pellentesque ac enim a, interdum euismod lectus. Aliquam sed finibus mi.",
    date: "20 March, 2025",
    likes: 900,
    views: 830,
  },
  {
    id: 2,
    image: "/LandingPage/b3.png",
    title: "Fuis aute irure dolor in velit voluptate esse",
    description:
      "Kt turpis purus, pellentesque ac enim a, interdum euismod lectus. Aliquam sed finibus mi.",
    date: "20 March, 2025",
    likes: 900,
    views: 830,
  },
  {
    id: 3,
    image: "/LandingPage/b4.png",
    title: "Duis aute irure dolor in velit voluptate esse",
    description:
      "Ut turpis purus, pellentesque ac enim a, interdum euismod lectus. Aliquam sed finibus mi.",
    date: "20 March, 2025",
    likes: 900,
    views: 830,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-gray-50 relative">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-green-600 font-medium tracking-wide">Blog</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          LATEST NEWS
        </h2>
        <div className="mt-4 h-1 w-16 bg-green-500 rounded mx-auto"></div>
      </div>

      {/* Blog Layout */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Left Big Blog Image */}
        <div className="col-span-1 md:h-2/3  lg:col-span-2 relative group cursor-pointer">
          <img
            src="/LandingPage/b1.jpg"
            alt="Main Blog"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 text-right sm:bottom-6 right-4 sm:right-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold max-w-md sm:max-w-lg">
              Main Blog Highlight Title Goes Here
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-gray-200 max-w-sm sm:max-w-md">
              A short description of the main highlighted blog goes here,
              catching attention.
            </p>
            <p className="mt-2 text-green-400 font-medium text-xs sm:text-sm">
              20 March, 2025
            </p>
          </div>
        </div>

        {/* Right Blog Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 cursor-pointer"
            >
              {/* Image */}
              <div className="relative flex-shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full sm:w-36 h-40 sm:h-36 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between text-left mt-2 sm:mt-0">
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs md:text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" /> {blog.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-blue-500" /> {blog.views}
                  </span>
                  <span className="flex items-center gap-1 hover:text-green-600 transition-colors">
                    <Share2 className="w-4 h-4" /> Share
                  </span>
                </div>

                {/* Title + Description */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.description}
                </p>
                <p className="text-green-600 font-medium text-xs md:text-sm mt-2">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
