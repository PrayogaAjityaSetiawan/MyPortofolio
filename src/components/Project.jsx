import Card from "./Elements/Card/Card";
import { useSelector } from "react-redux";
const Project = ()=> {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
        <div className={
                darkMode 
                ? "bg-[#0c1a18] py-10  rounded-tr-xl rounded-tl-xl" 
                : "bg-[#CDEA68] py-10  rounded-tr-xl rounded-tl-xl"
            }>
            <div className="mx-5 md:mx-20 ">
                <h1 className={
                    darkMode 
                        ? "text-4xl md:text-7xl font-medium font-Primary text-white uppercase mb-5" 
                        : "text-4xl md:text-7xl font-medium font-Primary text-black uppercase mb-5"
                    }>
                    Recent Project</h1>
                <Card/>
            </div>
        </div>
    )
}
export default Project;