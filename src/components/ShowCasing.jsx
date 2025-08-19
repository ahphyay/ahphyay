import HandMade1 from "../assets/images/handmade-1.jpg";
import HandMade2 from "../assets/images/handmade-2.png";
import HandMade3 from "../assets/images/handmade-3.jpg";
import LivingRoom1 from "../assets/images/living-room-1.jpg";
import LivingRoom2 from "../assets/images/living-room-2.jpg";

export default function ShowCasing() {
  const showcasingImages = [
    { src: HandMade1, category: "Handmade Bag", name: "Whispers of Bagan (Handwoven bag)" },
    { src: HandMade2, category: "Handmade Bag", name: "“Latt Pan” (Handwoven bag)" },
    { src: HandMade3, category: "Handmade Bag", name: "Ah-Nyar" },
    { src: LivingRoom1, category: "Living", name: "Wisdom in Karen Motifs_(Handwoven)" },
    { src: LivingRoom2, category: "Living", name: "Nway Htway (Throw Blanket)" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#f7f2ef] via-[#f0e7e2] to-[#ece0d9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#653332] text-center mb-12">
         Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcasingImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 hover:scale-105 bg-white"
            >
              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-[#653332] text-white text-xs px-3 py-1 rounded-full z-10">
                {img.category}
              </div>

              <img
                src={img.src}
                alt={img.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />

              {/* Name Card below image */}
              <div className="p-4 text-center">
                <p className="font-semibold text-[#653332] text-sm md:text-base">{img.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
