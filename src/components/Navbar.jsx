import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IoMdMenu } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import icon from '../assets/icon_nav.jpeg'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".header").classList.add("bg-[#CDEA68]");
            } else {
                document.querySelector(".header").classList.remove("bg-[#CDEA68]");
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
    ]
    return (
            <motion.nav 
            initial={{y : "-100%"}} 
            animate={{y : "0"}} 
            transition={{duration : 0.5, type : "spring", stiffness : 75}} 
            className="mt-0 md:mt-3 md:px-20 z-[999]  w-full font-Primary fixed">
                <div className="header flex justify-between items-center mx-auto md:w-[80%] py-4 px-5 rounded-lg ">
                    <img className="w-10 rounded-full" src={icon} alt="" />
                    <div onClick={() => setOpen(!open)}  className="md:hidden p-3 rounded-full">
                        <IoMdMenu size={30} />
                    </div>
                {open && (
                    <MobileNavbar onClose={() => setOpen(false)} />
                )}
                <div className="hidden md:flex items-cente gap-5">
                {pages.map((page) => {
                    const { id, name } = page
                    return (
                        <motion.a  className="text-black rounded-full" href="" key={id} >{name}</motion.a>
                    )
                })}
                </div>
                </div>
            </motion.nav>
        
    )
}

export default Navbar;