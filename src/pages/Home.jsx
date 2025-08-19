import HeroSlider from "../components/HeroSlider";
import Intro from "../components/Intro";
import Benefits from "../components/Benefits";
import ShowCasing from "../components/ShowCasing";
import VideoShowCase from "../components/VideoShowCase";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Intro />
      <Benefits />
      <ShowCasing />
      <VideoShowCase youtubeLink="https://www.youtube.com/embed/abcd1234" />
      <Footer />
    </div>
  );
}
