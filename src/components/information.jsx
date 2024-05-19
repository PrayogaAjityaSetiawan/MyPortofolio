import card1 from "../assets/Meal Express.webp"
import Bookshelf from "../assets/Bookshelf.png"
import Weather from "../assets/Weather.png"
import { GoArrowUpRight } from "react-icons/go";
const Information = ()=> {
    return (
        <div   className=" bg-[#CDEA68] min-h-screen rounded-tr-xl rounded-tl-xl">
            <div className="py-10 md:py-20 mx-5 md:mx-20">
            <h1 className="text-4xl md:text-7xl font-bold text-zinc-700 font-Primary mb-10 uppercase">Project📌</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className=" bg-white overflow-hidden rounded-2xl ">
                    <img className="bg-cover bg-center" src={card1} alt="" />
                    <div className="flex gap-2 items-center p-5 text-zinc-700">
                        <a href="https://prayogaajityasetiawan.github.io/Website_Menu.github.io/" target="_blank" className=" font-Primary capitalize text-3xl ">meal express</a>
                        <GoArrowUpRight size={30} />
                    </div>
                </div>
                <div className=" bg-white overflow-hidden rounded-2xl ">
                    <img className="bg-cover bg-center" src={Bookshelf} alt="" />
                    <div className="flex gap-2 items-center p-5 text-zinc-700">
                        <a href="https://prayogaajityasetiawan.github.io/Website_Menu.github.io/" target="_blank" className=" font-Primary capitalize text-3xl ">bookshelf app</a>
                        <GoArrowUpRight size={30} />
                    </div>
                </div>
                <div className=" bg-white overflow-hidden rounded-2xl ">
                    <img className="bg-cover bg-center" src={Weather} alt="" />
                    <div className="flex gap-2 items-center p-5 text-zinc-700">
                        <a href="https://prayogaajityasetiawan.github.io/Website_Menu.github.io/" target="_blank" className=" font-Primary capitalize text-3xl ">weather app</a>
                        <GoArrowUpRight size={30} />
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    )
}
export default Information;