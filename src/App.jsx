import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Quotes from "./components/Quotes";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="w-full h-min-[100vh] bg-zinc-900 text-white " data-scroll-container>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Quotes />
      <Project/>
      <Footer />
    </div>
  );
}

export default App;

