import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const MobileNavbar = () => {

    return (
        <motion.div initial={{y:-100}} animate={{y:0 }} transition={{duration: 0.5}} className="md:hidden h-[100vh] right-0 top-0  w-full absolute bg-white">
            <div className="flex flex-col justify-between h-full p-10">
            <div className="flex justify-between ">
                <div className="flex flex-col  text-black  gap-5">
                    <div className="overflow-hidden">
                        <motion.a initial={{y : "100%"}} animate={{y : "0"}} transition={{duration : 0.1, type : "spring", stiffness : 75} }  className="text-4xl font-Primary" href="">Home</motion.a>
                    </div>
                    <div className="overflow-hidden ">
                        <motion.a initial = {{y: "100%"}} animate ={{y: "0"}} className="text-4xl font-Primary" href="">About</motion.a>
                    </div>
                    <div className="overflow-hidden">
                        <motion.a initial = {{y: 100}} animate ={{y: 0}} className="text-4xl font-Primary" href="">Project</motion.a>
                    </div>
                    <div className="overflow-hidden">
                        <motion.a initial = {{y: 100}} animate ={{y: 0}} className="text-4xl font-Primary" href="">Skills</motion.a>
                    </div>
                </div>
                <div className="text-black p-3 border-[1.5px] rounded-full">
                    <RxCross2 size={30}/>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 text-black">
                    < RiInstagramFill size={20} />
                    <h1 className=" underline capitalize">instagram</h1>
                </div>
                <div className="flex items-center gap-2 text-black">
                    <FaLinkedin size={20} />
                    <h1 className=" underline capitalize">linkedin</h1>
                </div>
                <div className="flex items-center gap-2 text-black">
                    <FaGithub size={20}/>
                    <h1 className=" underline capitalize">github</h1>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

export default MobileNavbar;