import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
const Footer = () => {

    
    return(
        <footer>
            <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="text-center relative">
                <h1 className="text-5xl md:text-7xl uppercase font-bold">let's connect</h1>
                <h1 className="text-5xl md:text-7xl uppercase font-bold">Together</h1>
                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <div className="backdrop-blur-lg bg-[] p-2 flex justify-center items-center rounded-sm gap-2 ">
                        <img className="w-10" src={linkedin} alt="" />
                        <img className="w-10" src={github} alt="" />
                        <img className="w-10" src={instagram} alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 md:left-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 md:right-0 w-[200px] h-[200px] bg-[#CDEA68] rounded-full blur-[100px]"></div>
            </div>
            <div>
                <h1></h1>
            </div>
        </footer>

    )
}

export default Footer;