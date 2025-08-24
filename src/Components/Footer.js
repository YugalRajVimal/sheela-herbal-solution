import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Top Products */}
        <div>
          <h3 className="text-xl font-bold mb-4">Top Products</h3>
          <ul className="space-y-2">
            <li>Black Organic Tea</li>
            <li>Loose Leaf Tea</li>
            <li>Oolong Tea</li>
            <li>Green Tea</li>
            <li>Sencha Tea</li>
          </ul>
        </div>

        {/* Column 2: Legal Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#products" className="text-white hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-white hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-white hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex flex-col">
              <span className="font-semibold">Address:</span>
              <span>Gali no 1, Gram Pavsara, Post Kasganj, Dist. Kasganj</span>
              <span>PIN code: 207123</span>
            </li>
            <li>
              <span className="font-semibold">Phone</span>
              <br />
              <a
                href="tel:+919389528675"
                className="text-white hover:underline"
              >
                +91 93895 28675
              </a>
            </li>
            {/* <li>
              <span className="font-semibold">Email</span>
              <br />
              <a href="mailto:contact@herbalstore.com" className="text-white hover:underline">contact@herbalstore.com</a>
            </li> */}
          </ul>
        </div>

        {/* Column 4: Newsletter + Logo */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/mortar-and-pestle.png"
              alt="Herbal Store Logo"
              className="w-10 h-10"
            />
            <span className="text-lg font-bold">HERBAL STORE</span>
          </div>

          {/* Newsletter */}
          {/* <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-lg">
            <input
              type="text"
              placeholder="Subscribe newsletter"
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
            <button className="bg-green-500 text-white font-medium px-6 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 transition">
              Subscribe Now
            </button>
          </div> */}

          {/* Description */}
          <p className="text-sm leading-relaxed">
            Sheela Herbal Company offers natural remedies for skin wellness,
            specializing in Psoriasis Oil and Psoriasis Capsules. With a
            commitment to quality and traditional herbal care, we help people
            find safe, natural relief.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/50 mt-10 pt-6 text-center">
        <p className="text-sm">
          Copyright © 2025. All right reserved. Sheela Herbal Solution
        </p>
      </div>

      {/* Bottom-right floating leaf icon */}
      {/* <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/50/22c55e/leaf.png"
          alt="Leaf Icon"
          className="w-6 h-6"
        />
      </div> */}
    </footer>
  );
};

export default Footer;
