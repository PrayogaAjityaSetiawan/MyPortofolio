import mealexpress from "../assets/meal_express.webp";
import bookshelf from "../assets/Bookshelf.webp";
import weather from "../assets/Weather.webp";
import aybwarehouse from "../assets/aybwarehouse.webp";
import pokemon from "../assets/pokemon.webp";
import todolist from "../assets/todolist.webp";

const Galery = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-1 md:mx-20 my-9">
            <div className="overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={bookshelf} alt="bookshelf" />
            </div>
            <div className="row-span-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={aybwarehouse} alt="aybwerahouse" />
            </div>
            <div className="row-span-2 col-start-1 row-start-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={mealexpress} alt="meal express" />
            </div>
            <div className="col-start-2 row-start-3 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={weather} alt="weather app" />
            </div>
            <div className="col-start-3 row-start-1 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={todolist} alt="todolist app" />
            </div>
            <div className="row-span-2 col-start-3 row-start-2 overflow-hidden md:rounded-xl">
                <img className="bg-cover object-cover h-full grayscale hover:scale-105 hover:grayscale-0 overflow-hidden hover:transition-all hover:ease-in" loading="lazy" src={pokemon} alt="pokemon" />
            </div>
        </div>
    );
};

export default Galery;
