// src/data/aboutData.js
import { HeartHandshake, Leaf, Users } from "lucide-react";
import bannerImg from "../assets/images/banner.png";

export const aboutData = {
  hero: {
    title: "About Ah Phyay",
    subtitle:
      "Empowering communities in Myanmar through sustainable, innovative, and inclusive development since 2016.",
    banner: bannerImg, 
  },
  story: [
    "Ahphyay, established in 2016, is a socio-economic development organization committed to overcoming social, economic, and organizational challenges through innovative, progressive, professional, and academic means.",
    "In response to political instabilities in 2021, Ahphyay refocused its efforts on direct implementation in social economic enterprises with a primary focus on women and youth affairs in Myanmar by promoting sustainability models, responsible business culture, and social entrepreneurship values.",
    "This shift was driven by a strong commitment to resilience and positive livelihood changes, aligning with SDG 5, SDG 8, and SDG 15.",
  ],
  vision: {
    title: "Our Vision",
    description:
      "Our vision is clear: to become a platform where diverse, marginalized individuals can thrive, enjoying peace, prosperity, and well-being while nurturing creativity and resilience.",
    values: [
      {
        title: "Empowerment",
        description: "Strengthening communities with opportunities and dignity.",
        icon: HeartHandshake,
      },
      {
        title: "Sustainability",
        description: "Promoting responsible business and sustainable growth.",
        icon: Leaf,
      },
      {
        title: "Inclusivity",
        description:
          "Embracing diversity and cultural differences with respect.",
        icon: Users,
      },
    ],
  },
  approach: {
    title: "Our Approach",
    description:
      "Our approach is multifaceted, employing advocacy, research, training, incubation, consultation, coaching, facilitation, engagement, partnerships, and art-based initiatives to drive social change in Myanmar.",
  },
  cta: {
    title: "Join Our Journey",
    description:
      "Be part of Ah Phyay’s mission to empower women, youth, and communities in Myanmar through sustainable and inclusive initiatives.",
    button: "Get Involved",
  },
};
