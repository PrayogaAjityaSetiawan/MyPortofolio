import Card from "./Elements/Card/Card";
const Project = ()=> {
    return (
        <div className=" bg-[#CDEA68] min-h-screen rounded-tr-xl rounded-tl-xl">
            <div className="py-10 md:py-20 mx-5 md:mx-20">
                <h1 className="text-4xl md:text-7xl font-bold text-zinc-700 font-Primary mb-10 uppercase">Project📌</h1>
                <Card/>
            </div>
        </div>
    )
}
export default Project;