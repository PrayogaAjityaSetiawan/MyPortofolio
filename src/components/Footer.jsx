import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
const Footer = () => {

    const socialLinks = [
        { name: "Instagram", icon: RiInstagramFill, url: "https://www.instagram.com/prayogaajitya/" },
        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/prayoga-ajitya-setiawan-0229091a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "GitHub", icon: FaGithub, url: "https://github.com/PrayogaAjityaSetiawan" },
    ]; 
    return(
        <div  className="bg-[#F1F1F1] h-min-screen rounded-tr-xl rounded-tl-xl">
                <div className="flex flex-col gap-1 justify-center mt-5">
                        {socialLinks.map((socialLink, index) => (
                            <div key={index} className="flex gap-2 items-center text-zinc-700 cursor-pointer">
                                <socialLink.icon size={20} aria-label={socialLink.name}/>
                            <a href={socialLink.url} target="_blank" className="capitalize text-xl font-Primary">{socialLink.name}</a>
                            </div>
                        ))}
                </div>                  
        </div>
    )
}

export default Footer;