import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IoMdMenu } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    console.log(open)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                document.querySelector("nav").classList.add("backdrop-blur-sm")
            } else {
                document.querySelector("nav").classList.remove("backdrop-blur-sm")
            }
        })
    },[])

    const pages = [
        {
            id : 1,
            name : "Home",
            path : "/"
        },
        {
            id : 2,
            name : "About",
            path : "/"
        },
        {
            id : 3,
            name : "Project",
            path : "/"
        },
        {
            id : 4,
            name : "Skills",
            path : "/"
        },
    ]
    return (
        <motion.nav initial={{y : "-100%"}} animate={{y : "0"}} transition={{duration : 0.5, type : "spring", stiffness : 75}} className=" py-4 px-5 md:px-20 fixed z-[999] w-full flex justify-between items-center font-Primary ">
            <h1 className="text-xl font-bold">Prayoga</h1>
            <div onClick={() => setOpen(!open)}  className="md:hidden p-3 bg-[#004D43] rounded-full">
                <IoMdMenu size={30} />
            </div>
            {open && (
                <MobileNavbar onClose={() => setOpen(false)} />
            )}
            <div className="hidden md:flex items-cente gap-5">
            {pages.map((page) => {
                return (
                    <a href="" key={page.id} >{page.name}</a>
                )
            })}
            </div>
        </motion.nav>
        
    )
}

export default Navbar;