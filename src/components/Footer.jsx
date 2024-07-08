import { useState, useEffect } from "react"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, []);

    const sosialMedias = [
        {
            id: 1,
            image: linkedin,
            url : "https://www.linkedin.com/in/prayoga-ajitya-setiawan-0229091a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 2,
            image: github,
            url : "https://github.com/PrayogaAjityaSetiawan"
        },
        {
            id: 3,
            image: instagram,
            url : "https://www.instagram.com/prayogaajitya/"
        }
    ]
    
    return(
        <footer>
            <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="text-center relative">
                <h1 className="text-5xl md:text-7xl uppercase font-bold font-Primary">let's connect</h1>
                <h1 className="text-5xl md:text-7xl uppercase font-bold font-Primary">Together</h1>
                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <div className="backdrop-blur-lg bg-[] p-2 flex justify-center items-center rounded-sm gap-2 ">
                        {sosialMedias.map((sosialMedia) => {
                            const { id, image, url } = sosialMedia;
                            return (
                                <a key={id} href={url} target="_blank">
                                    <img className="w-8 md:w-10" src={image} alt="icon" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 md:left-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 md:right-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
            </div>
            <div className="pb-5 flex justify-center items-center gap-1 ">
                <FaRegCopyright  />
                <p className="text-base font-Primary"><span className="font-semibold">{currentYear}</span>. Build With Love.</p>
            </div>
        </footer>

    )
}

export default Footer;