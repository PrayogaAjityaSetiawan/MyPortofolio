import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Lain from "./components/Lain";
import Information from "./components/information";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="w-full h-min-[100vh] bg-zinc-900 text-white" data-scroll-container>
      <Navbar />
      <LandingPage />
      <Skills />
      <About />
      <Contact />
      <Information/>
      <Lain />
    </div>
  );
}

export default App;

