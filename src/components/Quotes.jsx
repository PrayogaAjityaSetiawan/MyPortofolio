import book from "../assets/2.png";
import we from "../assets/3.png";
import re from "../assets/4.png";
import se from "../assets/5.png";
import le from "../assets/6.png";
import ae from "../assets/7.png";

const Quotes = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-1 md:mx-20 my-9">
            <div className="overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={we} alt="" />
            </div>
            <div className="row-span-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={se} alt="" />
            </div>
            <div className="row-span-2 col-start-1 row-start-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={book} alt="" />
            </div>
            <div className="col-start-2 row-start-3 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={re} alt="" />
            </div>
            <div className="col-start-3 row-start-1 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={ae} alt="" />
            </div>
            <div className="row-span-2 col-start-3 row-start-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" src={le} alt="" />
            </div>
        </div>
    );
};

export default Quotes;
