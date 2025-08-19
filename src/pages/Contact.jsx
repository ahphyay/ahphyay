// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f9ecec] via-[#f6dcdc] to-[#f9ecec] overflow-hidden">
      <Navbar />

      {/* Floating Gradient Circles for Decoration */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-[#653332] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-[#8a4f4f] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center text-[#653332]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-80">
            We’d love to hear from you — let’s make something great together 🌸
          </p>
        </motion.div>
      </section>

      {/* Contact Info - Glass Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          { icon: MapPin, title: "Our Address", desc: "Yangon, Myanmar" },
          { icon: Phone, title: "Call Us", desc: "+95 9 123 456 789" },
          { icon: Mail, title: "Email", desc: "info@yourshop.com" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/30 shadow-lg p-8 rounded-2xl border border-white/40 text-center"
          >
            <item.icon className="mx-auto w-12 h-12 mb-3 text-[#653332]" />
            <h3 className="font-semibold text-xl text-[#653332]">{item.title}</h3>
            <p className="mt-2 text-[#653332]/80">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Glassmorphic Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/40 border border-white/50 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-[#653332] mb-6">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#653332] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#653332] outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#653332] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#653332] to-[#8a4f4f] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>

        {/* Map with Shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/40"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.620642842307!2d96.158!3d16.840"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* Social Media */}
      <section className="py-16 text-center relative z-10">
        <h3 className="text-2xl font-bold mb-6 text-[#653332]">Follow us</h3>
        <div className="flex justify-center gap-8">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="p-4 rounded-full backdrop-blur-md bg-white/40 shadow-lg border border-white/50"
          >
            <Facebook className="text-[#653332]" size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="p-4 rounded-full backdrop-blur-md bg-white/40 shadow-lg border border-white/50"
          >
            <Instagram className="text-[#653332]" size={28} />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
