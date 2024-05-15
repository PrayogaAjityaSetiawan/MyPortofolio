const Lain = () => {
    return(
        <div  className="bg-[#F1F1F1] h-screen rounded-tr-xl rounded-tl-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-20 mx-5 md:mx-20">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-7xl font-bold font-Primary text-zinc-700 uppercase mb-10">Tech Stack</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Html</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">CSS</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Tailwind</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">Bootstrap</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">JavaScript</h1>
                    <h1 className="border-b-[1px] mb-3 border-zinc-700 capitalize text-xl font-Primary text-zinc-700">React</h1>

                </div>
                <div className="md:w-1/2 md:mx-auto pt-10">
                    <div className="flex flex-col gap-3 justify-center">
                    <h1 className="capitalize text-xl font-Primary text-zinc-700">Instagram</h1>
                    <h1 className="capitalize text-xl font-Primary text-zinc-700">linkdin</h1>
                    <h1 className="capitalize text-xl font-Primary text-zinc-700">Github</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lain;