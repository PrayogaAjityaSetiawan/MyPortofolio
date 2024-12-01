import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import LandingPage from "./pages/LandingPage";

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
    <div ref={scrollRef} data-scroll-container>
      <LandingPage />
    </div>
  );
}

export default App;

