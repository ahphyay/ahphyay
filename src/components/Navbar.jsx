// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#653332] font-semibold border-b-2 border-[#653332]"
      : "text-gray-700 hover:text-[#653332]";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${searchQuery}`;
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Ahphyay Logo"
                className="h-10 w-auto rounded-full"
              />
            </Link>
          </div>

          {/* Center nav menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>

            {/* Shop dropdown desktop */}
            <div className="relative group">
              <Link to="/shop" className={isActive("/shop")}>
                Shop
              </Link>
              <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/shop/handmade-bags"
                  className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
                >
                  Handmade Bags
                </Link>
                <Link
                  to="/shop/living"
                  className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
                >
                  Living
                </Link>
              </div>
            </div>

            <Link to="/about-us" className={isActive("/about-us")}>
              About Us
            </Link>
            <Link to="/contact" className={isActive("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 mx-4 flex-1 max-w-sm"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent flex-grow outline-none px-2 text-sm text-gray-700"
            />
            <button type="submit" className="text-[#653332]">
              <FaSearch />
            </button>
          </form>

          {/* Right icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative text-[#653332]">
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </Link>
            <Link to="/login" className="text-[#653332]">
              <FaUser className="h-5 w-5" />
            </Link>
          </div>

          {/* Hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-[#653332]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
          >
            Home
          </Link>
          <button
            onClick={() => setShopOpen(!shopOpen)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#653332] font-medium"
          >
            Shop
          </button>
          {shopOpen && (
            <div className="pl-4">
              <Link
                to="/shop/handmade-bags"
                className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
              >
                Handmade Bags
              </Link>
              <Link
                to="/shop/living"
                className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
              >
                Living
              </Link>
            </div>
          )}
          <Link
            to="/about-us"
            className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
          >
            Contact Us
          </Link>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-3 py-2 m-4"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent flex-grow outline-none px-2 text-sm text-gray-700"
            />
            <button type="submit" className="text-[#653332]">
              <FaSearch />
            </button>
          </form>

          <Link
            to="/cart"
            className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-gray-100 text-[#653332]"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
