import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../assets/images/banner.png"

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div>
                <Navbar />
                <div className="pt-20 text-center text-gray-500 my-10">
                    Product not found.
                    <Link to="/shop" className="text-[#653332] ml-2 underline">
                        Go Back
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

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
            {/* Product Hero Section */}
            <section className="pt-20 max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-8 mb-10">
                {/* Product Image */}
                <div className="flex-1">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#653332]">
                        {product.name}
                    </h1>
                    <p className="text-gray-700 text-lg">{product.description}</p>
                    <p className="text-xl font-semibold text-[#653332]">
                        ${product.price}
                    </p>

                    {/* Category */}
                    <p className="text-sm text-gray-500">
                        Category: <span className="font-medium">{product.category}</span>
                    </p>

                    {/* Specifications */}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-[#653332] mb-2">
                            Product Specification
                        </h2>
                        <p className="text-gray-700">{product.specification}</p>
                    </div>

                    {/* Product Details */}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-[#653332] mb-2">
                            Product Details
                        </h2>
                        <p className="text-gray-700">{product.details}</p>
                    </div>

                    {/* Caution */}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-[#653332] mb-2">Caution</h2>
                        <p className="text-gray-700">{product.caution}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-6 py-3 px-8 bg-[#653332] text-white rounded-full font-medium hover:bg-[#7f4540] transition">
                        Add to Cart
                    </button>

                    {/* Back to Shop */}
                    <Link
                        to="/shop"
                        className="mt-4 text-[#653332] underline hover:text-[#7f4540]"
                    >
                        ← Back to Shop
                    </Link>
                </div>
            </section>


            {/* Optional: You can add "More Products" or "Related Products" section here */}

            <Footer />
        </div>
    );
}
