import card1 from "../assets/Meal Express.webp"
import { FaArrowDownLong } from "react-icons/fa6";

const Information = ()=> {
    return (
        <div   className=" bg-[#CDEA68] min-h-screen rounded-tr-xl rounded-tl-xl">
            <div className="py-10 md:py-20 mx-5 md:mx-20">
            <h1 className="text-4xl md:text-7xl font-bold text-zinc-700 font-Primary mb-10 uppercase">Project📌</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className=" bg-white overflow-hidden ">
                    <img className="bg-cover bg-center" src={card1} alt="" />
                    <div className="p-5">
                        <h1 className="capitalize text-3xl text-zinc-700 ">meal express</h1>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden ">
                    <img className="bg-cover bg-center" src={card1} alt="" />
                    <div className="flex justify-between items-center  p-5">
                        <h1 className="capitalize text-3xl text-zinc-700 ">meal express</h1>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden ">
                    <img className="bg-cover bg-center" src={card1} alt="" />
                    <div className="p-5">
                        <h1 className="capitalize text-3xl text-zinc-700 ">meal express</h1>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    )
}
export default Information;