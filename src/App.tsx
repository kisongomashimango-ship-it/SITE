import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BlueFestival from "./components/BlueFestival";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CountdownBanner from "./components/CountdownBanner";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1535] text-white antialiased overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <CountdownBanner />
      <About />
      <BlueFestival />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
