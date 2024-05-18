import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
const Lain = () => {
    return(
        <div  className="bg-[#F1F1F1] h-screen rounded-tr-xl rounded-tl-xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 pt-20 mx-5 md:mx-20">
                <div className=" w-full">
                    <h1 className="text-4xl md:text-7xl font-bold font-Primary text-zinc-700 uppercase mb-10">Tech Stack</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Html</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">CSS</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Tailwind</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Bootstrap</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">JavaScript</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">React</h1>

                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-1 justify-center">
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
                </div>
            </div>
        </div>
    )
}

export default Lain;