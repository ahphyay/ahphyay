// src/components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#653332] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Name */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Ah Phyay</h3>
          <p className="text-gray-200">
            No 11, Baho Road West Gyoegone, Insein, Yangon, Myanmar.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>+95 9 42109 9312</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope />
            <span>ahphyayteam@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>No 11, Baho Road West Gyoegone, Insein, Yangon, Myanmar.</span>
          </div>
        </div>

        {/* Optional: Quick Links or Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/" className="hover:text-gray-100 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-100 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-100 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-100 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Ah Phyay. All rights reserved.
      </div>
    </footer>
  );
}
