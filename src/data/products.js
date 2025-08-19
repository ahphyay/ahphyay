// src/data/products.js
import HandMade1 from "../assets/images/handmade-1.jpg";
import HandMade2 from "../assets/images/handmade-2.png";
import HandMade3 from "../assets/images/handmade-3.jpg";
import LivingRoom1 from "../assets/images/living-room-1.jpg";
import LivingRoom2 from "../assets/images/living-room-2.jpg";

export const products = [
  {
    id: 1,
    name: "Whispers of Bagan",
    category: "Handmade Bag",
    image: HandMade1,
    price: 120,
    description:
      "Inspired by the sunrise over the ancient temples of Bagan, this bag symbolizes timeless beauty and resilience.",
    specification:
      "100% Cotton Canvas, Hand-painted patterns, Lining – Local Cotton, Zip – YKK.",
    details: "Size: 40cm x 30cm x 12cm, Weight: 550g",
    caution:
      "Hand wash with mild detergent, avoid direct sunlight to preserve colors.",
  },
  {
    id: 2,
    name: "Latt Pan",
    category: "Handmade Bag",
    image: HandMade2,
    price: 95,
    description:
      "The 'Latt Pan' flower served as inspiration for the design. This flower blooms with both strength and beauty. Its sturdy branches, covered in bright red blossoms, are well-prepared to bloom freely as the season progresses. The Latt Pan flower teaches us that, even during the toughest seasons, life and beauty can flourish, embodying the resilience and spirit of the Myanmar people.",
    specification:
      "100% Brown Cotton, Acrylic paint on Fabric, Inner fabric – 100% cotton (Myin Chan), Zip – Durable metal zip.",
    details: "Size: 38cm x 32cm x 10cm, Weight: 500g",
    caution:
      "Laundry bag recommended, hand wash or wool mode, soft detergent or natural soaps, dry under shade.",
  },
  {
    id: 3,
    name: "Ah-Nyar",
    category: "Handmade Bag",
    image: HandMade3,
    price: 105,
    description:
      "Inspired by the seasonal transition in Myanmar, the 'Ah-Nyar' bag symbolizes harmony and balance between change and stability.",
    specification:
      "Premium Cotton blend, Natural dyes, Inside lining: 100% cotton.",
    details: "Size: 35cm x 28cm x 11cm, Weight: 480g",
    caution:
      "Do not bleach, wash gently with mild soap, air dry in shaded areas.",
  },
  {
    id: 4,
    name: "Wisdom in Karen Motifs",
    category: "Living",
    image: LivingRoom1,
    price: 70,
    description:
      "A beautifully woven piece that incorporates traditional Karen motifs, representing wisdom, heritage, and cultural pride.",
    specification:
      "Handwoven Cotton fabric, Natural colors, Designed for daily use.",
    details: "Size: 200cm x 150cm, Weight: 1.2kg",
    caution:
      "Cold wash only, avoid strong detergents, do not tumble dry.",
  },
  {
    id: 5,
    name: "Nway Htway (Throw Blanket)",
    category: "Living",
    image: LivingRoom2,
    price: 85,
    description:
      "This throw blanket is designed for warmth and comfort, symbolizing soft spring breezes and renewal of life.",
    specification:
      "100% Local Cotton, Dyed with eco-friendly pigments, Handwoven finish.",
    details: "Size: 220cm x 180cm, Weight: 1.5kg",
    caution:
      "Gentle machine wash in cold water, avoid direct sunlight for drying.",
  },
];
