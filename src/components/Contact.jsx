import { motion } from "framer-motion";
const Contact =() => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="h-screen mx-5  text-white flex justify-center flex-col items-center overflow-hidden" >
            <motion.div initial={{y : "100%"}} animate={{y : "0"}} transition={{duration : 0.5, type : "spring", stiffness : 75} } className="bg-[#004D43] p-3">
                <h1 className="text-7xl font-Primary font-bold uppercase">"don't be afraid to try</h1>
            </motion.div>
            <div>
                <h1 className="text-7xl font-Primary font-bold uppercase">and never stop trying."</h1>
            </div>
        </div>
    )
}
export default Contact;