import Card from "./Elements/Card/Card";
const Project = ()=> {
    return (
        <div className="bg-[#CDEA68] py-10  rounded-tr-xl rounded-tl-xl">
            <div className="mx-5 md:mx-20 ">
                <h1 className="text-4xl md:text-7xl font-medium font-Primary text-zinc-700 uppercase mb-5">Recent Project</h1>
                <Card/>
            </div>
        </div>
    )
}
export default Project;