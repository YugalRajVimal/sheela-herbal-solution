import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Function to close the menu

  return (
    <nav  className="nav w-full fixed top-0 left-0 z-50 bg-black/20 px-6 md:px-10 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://img.icons8.com/ios-filled/50/22c55e/mortar-and-pestle.png"
          alt="Herbal Store Logo"
          className="w-10 h-10"
        />
        <span className="text-lg font-bold text-black">
          Sheela Herbal Solution
        </span>
      </div>

      {/* Center: Menu (Desktop) */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-semibold">
        <li className="cursor-pointer hover:text-green-600">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-green-600">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-green-600">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>

      <button
        className="md:hidden text-black"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/30 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-800 font-semibold">
            <li className="cursor-pointer hover:text-green-600">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600">
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600">
              <Link to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
