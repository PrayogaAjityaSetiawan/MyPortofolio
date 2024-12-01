import { GoArrowUpRight } from "react-icons/go";
import card1 from "../../../assets/Meal Express.webp"
import Bookshelf from "../../../assets/Bookshelf.webp"
import Weather from "../../../assets/Weather.webp"
import { useSelector } from "react-redux";


const Card = () => {
    const darkMode = useSelector((state) => state.darkMode.value);
    const cards = [
        {
            id: 1,
            title: "meal express",
            description: "",
            image: card1,
            link: "https://prayogaajityasetiawan.github.io/Website_Menu.github.io/",
            icon: GoArrowUpRight,
            desc: "meal express is a static landing page to display food sales"
        },
        {
            id: 2,
            title: "bookshelf app",
            image: Bookshelf,
            link: "https://bookshelf-apps-prayoga.netlify.app/",
            icon: GoArrowUpRight,
            desc: "book management website, you can add books, mark books that have been read and those that have not been read."
        },
        {
            id: 3,
            title: "weather app",
            image: Weather,
            link: "https://weather-app-prayoga.netlify.app/",
            icon: GoArrowUpRight,
            desc: "The weather app was created using the API from OpenWeather where we can search for the weather according to the location we are looking for."
        },
    ]

    return (
        <div>
            {cards.map(card => (
                <div key={card.id} className={
                        darkMode 
                        ? "w-full text-white" 
                        : "w-full"
                    }>
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center py-5 md:py-3 group hover:bg-[#004D43] font-Primary ">
                    <div className="w-full md:w-[30%]">
                        <img className="bg-cover bg-center md:w-[300px] h-auto rounded-xl" loading="lazy" src={card.image} alt="project" />
                    </div>
                    <div className="w-full md:w-[70%] grid md:grid-cols-1 lg:grid-cols-2 gap-2 ">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl md:text-3xl font-Primary capitalize  group-hover:text-white">{card.title}</span>
                            <GoArrowUpRight size={30} className="group-hover:text-white " />
                        </div>
                        <p className=" group-hover:text-white text-base md:text-xl text-start">{card.desc}</p>
                    </div>
                    </div>
                    <div className="h-[1px] w-full bg-white"></div>
                </div>
                
            ))}
        </div>
    )
}

export default Card;