import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Marquee = () => {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
        <div 
            data-scroll 
            data-scroll-section 
            data-scroll-speed=".1" 
            className={
                darkMode 
                ? "hidden md:block relative w-full max-h-[100vh] bg-white text-[#2a3c3b] py-2" 
                : "hidden md:block w-full bg-[#004D43] rounded-tr-xl rounded-tl-xl text-white" 
            }>
            <div className="flex items-center h-auto whitespace-nowrap py-10 overflow-hidden font-Primary uppercase">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    className="text-[16vw] leading-none font-bold pr-10"
                >
                    I'am Prayoga
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    className="text-[16vw] leading-none font-bold pr-10"
                >
                    I'am Prayoga
                </motion.h1>
            </div>
        </div>
    );
};

export default Marquee;
