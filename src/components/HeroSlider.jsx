import Slider from "react-slick";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroSlider() {
  const sliderImages = [slider1, slider2, slider3];

  // Custom Left Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer text-white bg-[#653332]/70 p-2 rounded-full hover:bg-[#653332] transition"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );

  // Custom Right Arrow
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer text-white bg-[#653332]/70 p-2 rounded-full hover:bg-[#653332] transition"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {sliderImages.map((img, idx) => (
          <div key={idx} className="h-[70vh] relative">
            {/* Background Image */}
            <div
              className="h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                {/* Glassmorphism container */}
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 animate-fadeInUp">

                  {/* Heading with gradient text */}
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-300 via-yellow-300 to-red-400 text-transparent bg-clip-text">
                    Welcome to Ahphyay
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg md:text-2xl text-gray-100 mb-6 leading-relaxed">
                    Discover our <span className="font-semibold text-yellow-200 mx-1">handmade bags</span>
                     and <span className="font-semibold text-pink-200">living essentials</span>
                  </p>

                  {/* Button with glow hover */}
                  <Link
                    to="/shop"
                    className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#653332] to-[#7f4540] shadow-lg hover:shadow-[0_0_15px_#7f4540] transition duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>

      {/* Customize dots */}
      <style jsx>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          color: #653332;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
