// src/components/Benefits.jsx
import { FaLeaf, FaChartLine, FaLightbulb } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaLeaf size={28} />,
      title: "Sustainable Products",
      description:
        "Eco-friendly, responsibly produced artisan goods, allowing you to support ethical consumption.",
      bgColor: "bg-[#7f4540]/20",
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Career Growth",
      description:
        "Access job opportunities and professional skill development to advance in your career.",
      bgColor: "bg-[#7f4540]/20",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Entrepreneurial Support",
      description:
        "Our incubation program equips aspiring entrepreneurs with knowledge, resources, and mentorship to succeed.",
      bgColor: "bg-[#7f4540]/20",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#653332] via-[#7f4540] to-[#a65c50]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          What Benefits AhPhyay Provides
        </h2>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${item.bgColor}`}
            >
              <div className="flex items-center gap-3 text-white mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
