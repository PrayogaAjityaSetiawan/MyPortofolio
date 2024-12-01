import Navbar from "../components/Navbar";
import About from '../components/About';
import Galery from "../components/Galery";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import { useSelector } from "react-redux";

const LandingPage = () => {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
        <div className={
            darkMode 
            ? "bg-[#2a3c3b] text-white w-full min-h-screen" 
            : "bg-[#F1F1F1] text-black w-full min-h-screen"
        }>
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <Galery />
            <Project/>
            <Footer />
        </div>
    )
}

export default LandingPage;