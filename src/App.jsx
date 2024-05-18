import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Information from "./components/information";
import Lain from "./components/Lain";

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-min-[100vh]  bg-zinc-900 text-white">
      <Navbar/>
      <LandingPage/>
      <Skills/>
      <About/>
      <Contact/>
      <Information/>
      <Lain/>
    </div>
  )
}

export default App
