import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Testimonial />
      <MyPortfolio />
      <p style={{ textAlign: "center", marginTop: "-2rem", marginBottom: "1rem" }}>
        Made with 💖 by Vishal Mishra
      </p>
    </>
  );
}