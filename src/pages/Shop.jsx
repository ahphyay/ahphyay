// src/pages/Shop.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";
import BannerImage from "../assets/images/banner.png"

export default function Shop() {
  const categories = ["All", "Handmade Bag", "Living"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // slightly smaller per page for better layout

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Our Shop</h1>
          <p className="mt-2 text-lg md:text-xl">
            Discover our handmade bags and living essentials
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="pt-10 max-w-7xl mx-auto px-4 md:px-6 mb-10">
        {/* Search + Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch} />

          <div>
            <label className="mr-2 font-medium text-gray-700">Category:</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#653332]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/shop/${product.id}`}
                className="transform hover:scale-105 transition shadow-lg rounded-xl overflow-hidden"
              >
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === idx + 1
                    ? "bg-[#653332] text-white border-[#653332]"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-[#7f4540] hover:text-white transition`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
