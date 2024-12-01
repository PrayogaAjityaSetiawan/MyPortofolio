import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import Button from "./Elements/Button/Button";
import { useSelector} from "react-redux";
const Hero = () => {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
        <section 
            
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className= {
                darkMode 
                ? " relative w-full max-h-[100vh] text-white py-2" 
                : " relative w-full max-h-[100vh] text-black py-2" 
            }>
            <div className="mt-52 md:mt-52 flex flex-col justify-center items-center font-Primary">
                <div className="w-fit flex items-center h-1/3 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0" }}
                        transition={{ duration: 0.1, type: "spring", stiffness: 75 }}
                        className="uppercase text-3xl md:text-7xl font-semibold"
                    >
                        let me introduce
                    </motion.h1>
                </div>
                <div className="w-fit flex gap-2 items-center h-1/3 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0" }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 75 }}
                        className="uppercase text-3xl md:text-7xl font-semibold"
                    >
                        myself, I am
                    </motion.h1>
                </div>
                <div className="w-fit flex items-center h-1/3 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0" }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 75 }}
                        className="uppercase text-3xl md:text-7xl font-semibold"
                    >
                        Frontend Enthusiast
                    </motion.h1>
                </div>
            </div>
            <div className="mt-52 md:mt-32 border-t-[1px] border-zinc-700 font-Primary h-full">
                <div className="mt-5 mx-5 md:mx-20 flex flex-col gap-5 items-start md:flex-row md:justify-between md:items-center">
                    <h1>Get to know more closely</h1>
                    <h1>About Me</h1>
                    <div className="z-10 flex gap-2">
                        <Button>Know More</Button>
                        <motion.div
                            whileHover={{
                                backgroundColor: "white",
                                color: "black",
                                scale: 1.1,
                            }}
                            transition={{
                                ease: [0.25, 1, 0.5, 1],
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                            className="w-10 h-10 flex justify-center items-center border-[1px] border-zinc-700 rounded-full"
                        >
                            <FaArrowDownLong />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
        </section>
    );
};

export default Hero;
