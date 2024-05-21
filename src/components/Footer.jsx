import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    
    const Techs = ["html","css","tailwind","bootstrap","javascript","react js"]

    const socialLinks = [
        { name: "Instagram", icon: RiInstagramFill, url: "https://www.instagram.com/prayogaajitya/" },
        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/prayoga-ajitya-setiawan-0229091a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "GitHub", icon: FaGithub, url: "https://github.com/PrayogaAjityaSetiawan" },
    ]; 
    return(
        <div  className="bg-[#F1F1F1] h-min-screen rounded-tr-xl rounded-tl-xl">
            <div className="grid grid-cols-1 md:grid-cols-2  p-5 md:p-20">
                <div className=" w-full">
                    <h1 className="text-4xl md:text-7xl font-bold font-Primary text-zinc-700 uppercase mb-10">Tech Stack</h1>
                </div>
                <div className="w-full">
                    <div>
                        {Techs.map((tech,index) => (
                            <div key={index} className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                                <h1 className=" capitalize text-xl font-Primary text-zinc-700">{tech}</h1>
                            </div>
                        ))}      
                    </div>
                    <div className="flex flex-col gap-1 justify-center mt-5">
                        {socialLinks.map((socialLink, index) => (
                            <div key={index} className="flex gap-2 items-center text-zinc-700 cursor-pointer">
                                <socialLink.icon size={20} aria-label={socialLink.name}/>
                            <a href={socialLink.url} target="_blank" className="capitalize text-xl font-Primary">{socialLink.name}</a>
                        </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-zinc-700 pt-20 ">
                    <h1 className="capitalize font-normal text-xl font-Primary">built with love</h1>
                    <div className="flex items-center gap-1">
                    <FaRegCopyright size={20}/>
                    <h1 className=" font-normal text-xl font-Primary">2024</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;