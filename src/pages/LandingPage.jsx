import Hero from "../components/LandingPage";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div className="w-full min-h-screen">
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default LandingPage;