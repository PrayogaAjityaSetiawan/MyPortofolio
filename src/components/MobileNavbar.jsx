import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const MobileNavbar = ({ onClose }) => {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Project", path: "/projects" },
        { name: "Skills", path: "/skills" },
    ];

    const socialLinks = [
        { name: "Instagram", icon: RiInstagramFill, url: "https://www.instagram.com/prayogaajitya/" },
        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/prayoga-ajitya-setiawan-0229091a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "GitHub", icon: FaGithub, url: "https://github.com/PrayogaAjityaSetiawan" },
    ];

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden h-[100vh] right-0 top-0 w-full absolute bg-white p-10 z-50"
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between">
                    <div className="flex flex-col text-black gap-5">
                        {links.map((link, index) => (
                            <div key={link.name} className="overflow-hidden">
                                <motion.a
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0" }}
                                    transition={{ duration: 0.1 * (index + 1), type: "spring", stiffness: 75 }}
                                    className="text-4xl font-Primary"
                                    href={link.path}
                                    onClick={onClose}
                                >
                                    {link.name}
                                </motion.a>
                            </div>
                        ))}
                    </div>
                    <div
                        className="text-black p-3 border-[1.5px] rounded-full cursor-pointer"
                        onClick={onClose}
                    >
                        <RxCross2 size={30} aria-label="Close Menu" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-black"
                        >
                            <social.icon size={20} aria-label={social.name} />
                            <h1 className="underline capitalize">{social.name}</h1>
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MobileNavbar;
