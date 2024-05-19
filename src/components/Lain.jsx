import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
const Lain = () => {
    return(
        <div  className="bg-[#F1F1F1] h-min-screen rounded-tr-xl rounded-tl-xl">
            <div className="grid grid-cols-1 md:grid-cols-2  p-5 md:p-20">
                <div className=" w-full">
                    <h1 className="text-4xl md:text-7xl font-bold font-Primary text-zinc-700 uppercase mb-10">Tech Stack</h1>
                </div>
                <div className="w-full">
                    <div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">Html</h1>
                        </div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">css</h1>
                        </div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">tailwind</h1>
                        </div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">bootstrap</h1>
                        </div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">javascript</h1>
                        </div>
                        <div className=" border-b-[1px] p-2 border-zinc-700 hover:bg-[#CDEA68]">
                            <h1 className=" capitalize text-xl font-Primary text-zinc-700">react</h1>
                        </div>
                    
                    </div>
                    <div className="flex flex-col gap-1 justify-center mt-5">
                        <div className="flex gap-2 items-center text-zinc-700 cursor-pointer">
                            <RiInstagramFill size={20}/>
                            <h1 className="capitalize text-xl font-Primary">Instagram</h1>
                        </div>
                        <div className="flex gap-2 items-center text-zinc-700 cursor-pointer">
                            <FaLinkedin size={20}/>
                            <h1 className="capitalize text-xl font-Primary">linkedin</h1>
                        </div>
                        <div className="flex gap-2 items-center text-zinc-700 cursor-pointer">
                            <FaGithub size={20}/>
                            <h1 className="capitalize text-xl font-Primary">Github</h1>
                        </div>
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

export default Lain;