import { GoArrowUpRight } from "react-icons/go";
import card1 from "../../../assets/Meal Express.webp"
import Bookshelf from "../../../assets/Bookshelf.png"
import Weather from "../../../assets/Weather.png"

const Card = () => {
    const cards = [
        {
            id: 1,
            title: "meal express",
            description: "",
            image: card1,
            link: "https://prayogaajityasetiawan.github.io/Website_Menu.github.io/",
            icon: GoArrowUpRight
        },
        {
            id: 2,
            title: "bookshelf app",
            image: Bookshelf,
            link: "https://bookshelf-apps-prayoga.netlify.app/",
            icon: GoArrowUpRight
        },
        {
            id: 3,
            title: "weather app",
            image: Weather,
            link: "https://weather-app-prayoga.netlify.app/",
            icon: GoArrowUpRight
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cards.map(card => (
                <div key={card.id} className=" bg-white overflow-hidden rounded-2xl ">
                    <img className="bg-cover bg-center" loading="lazy" src={card.image} alt={card.name} />
                    <div className="flex gap-2 items-center p-5 text-zinc-700">
                        <a href={card.link} target="_blank" className=" font-Primary capitalize text-3xl ">{card.title}</a>
                        <card.icon size={30} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;