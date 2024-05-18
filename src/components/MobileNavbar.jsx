
const MobileNavbar = (open, setopen) => {

    return (
        <div className="md:hidden h-[100vh] right-0 top-0  w-full absolute bg-white">
            <div className="flex justify-between p-10">
                <div className="flex flex-col  text-black  gap-5">
                    <a className="text-4xl font-Primary" href="">Home</a>
                    <a className="text-4xl font-Primary" href="">About</a>
                    <a className="text-4xl font-Primary" href="">Project</a>
                    <a className="text-4xl font-Primary" href="">Skills</a>
                </div>
                <div onClick={() => setopen(open)}>
                    <h1 className="text-black">Silang</h1>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;