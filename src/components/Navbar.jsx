import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IoMdMenu } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toogleDarkMode } from "../store/darkMode/darkModeSlice";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const darkMode = useSelector(state => state.darkMode.darkMode)
    const dispatch = useDispatch()


    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
                if (window.scrollY > 0) {
                    header.classList.add("bg-white/30");
                    header.classList.add("backdrop-blur-sm");
                } else {
                    header.classList.remove("bg-white/30");
                    header.classList.remove("backdrop-blur-sm");
                }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, []);  
    


    const pages = [
        { id : 1, name : "Home", path : "/"},
        { id : 2, name : "About", path : "/"},
        { id : 3, name : "Project", path : "/"},
        { id : 4, name : "Contact", path : "/"},
        { id : 5, name : "Resume", path : "/"},
    ]
    return (
            <motion.nav 
            initial={{y : "-100%"}} 
            animate={{y : "0"}} 
            transition={{duration : 0.5, type : "spring", stiffness : 75}} 
            className="mt-0 md:mt-3 md:px-20 z-[999]  w-full font-Primary fixed">
                <div className="header flex  md:justify-center items-center mx-auto md:w-[60%] lg:w-1/3 py-4 px-5 md:rounded-full md:border-[3px] border-white ">
                    <div className="flex justify-between w-full items-center md:hidden">
                    {darkMode ? (                            
                            <MdOutlineWbSunny
                                color="white"
                                size={30}
                                onClick={() => dispatch(toogleDarkMode())}
                                className="cursor-pointer"
                            />
                        ) : (
                            <MdOutlineDarkMode
                                size={30}
                                onClick={() => dispatch(toogleDarkMode())}
                                className="cursor-pointer"
                            />
                        )}
                    <div onClick={() => setOpen(!open)}  className=" p-3 rounded-full">                       
                        <IoMdMenu size={30} />
                    </div>
                    </div>
                {open && (
                    <MobileNavbar onClose={() => setOpen(false)} />
                )}
                <div className="hidden md:flex items-center gap-5">
                <div>
                <div>
                        {darkMode ? (                            
                            <MdOutlineWbSunny
                                color="white"
                                size={30}
                                onClick={() => dispatch(toogleDarkMode())}
                                className="cursor-pointer"
                            />
                        ) : (
                            <MdOutlineDarkMode
                                size={30}
                                onClick={() => dispatch(toogleDarkMode())}
                                className="cursor-pointer"
                            />
                        )}
                    </div>
        </div>
                
                {pages.map((page) => {
                    const { id, name } = page
                    return (
                        <motion.a className= {
                            darkMode 
                            ? "text-white rounded-full" 
                            : "text-black rounded-full"} 
                            href="" 
                            key={id} >
                            {name}
                        </motion.a>
                    )
                })}
                </div>
                </div>
            </motion.nav>
        
    )
}

export default Navbar;