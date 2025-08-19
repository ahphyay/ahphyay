import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";
import Footer from "../components/Footer";


export default function About() {
  return (
    <div className="pt-16">
     
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutData.hero.banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {aboutData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            {aboutData.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white px-6">
        <motion.div
          className="max-w-5xl mx-auto text-gray-700 space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {aboutData.story.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </motion.div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#653332]/10 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#653332] mb-8">
            {aboutData.vision.title}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {aboutData.vision.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {aboutData.vision.values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <value.icon className="w-12 h-12 text-[#653332] mb-4" />
                <h3 className="font-semibold text-xl">{value.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#653332] mb-8">
            {aboutData.approach.title}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {aboutData.approach.description}
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#653332] text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {aboutData.cta.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            {aboutData.cta.description}
          </p>
          <button className="px-6 py-3 bg-white text-[#653332] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
            {aboutData.cta.button}
          </button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
