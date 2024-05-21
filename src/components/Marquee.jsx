import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div 
            data-scroll 
            data-scroll-section 
            data-scroll-speed=".1" 
            className="hidden md:block w-full bg-[#004D43] rounded-tr-xl rounded-tl-xl"
        >
            <div className="flex items-center h-auto whitespace-nowrap py-10 overflow-hidden font-Primary">
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
