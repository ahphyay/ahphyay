// src/components/Intro.jsx
import { FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";
import IntroImage from "../assets/images/intro.jpg";
import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="md:w-1/2">

                    <img
                        src={IntroImage} alt="Ahphyay"
                        className="rounded-xl shadow-lg w-full md:h-[500px] object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#653332]">
                        What is AhPhyay?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Established in 2016, AhPhyay is a social enterprise dedicated to sustainable development, empowerment, and innovative solutions for communities.
                    </p>

                    {/* Features / Cards */}
                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-3 text-[#653332]">
                                <FaLeaf size={24} />
                                <h4 className="font-semibold text-lg">Eco-Friendly</h4>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Sustainable products crafted responsibly for the planet.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-3 text-[#653332]">
                                <FaUsers size={24} />
                                <h4 className="font-semibold text-lg">Empowerment</h4>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Supporting youth and women to grow their careers and skills.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-3 text-[#653332]">
                                <FaLightbulb size={24} />
                                <h4 className="font-semibold text-lg">Innovation</h4>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Creative solutions to generate social impact and value.
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 ">
                        <Link
                            to="/shop"
                            className="bg-[#653332] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7f4540] transition"
                        >
                            Shop Now
                        </Link>
                         <Link
                            to="/about-us"
                            className="bg-white border border-[#653332] text-[#653332] px-6 py-3 rounded-full font-medium hover:bg-[#fef5f5] transition"
                        >
                            Learn More
                        </Link>
                       
                    </div>

                </div>

            </div>
        </section>
    );
}
