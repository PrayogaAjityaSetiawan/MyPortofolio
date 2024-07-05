import js from "../assets/js.svg";
import tailwind from "../assets/tailwindcss.svg";
import react from "../assets/react.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import { motion } from "framer-motion";

const Quotes = () => {
    return (
        <div className="relative mt-10 mx-5 md:mx-20 text-[#004D43] flex flex-col md:flex-row md:justify-between items-center gap-10 ">
            <div className="z-10">
                <h1 className="text-4xl md:text-7xl font-medium font-Primary text-zinc-700 uppercase">
                    Tech Stack
                </h1>
                <span> Frontend tech stack that I use in my projects and projects that I am working on. </span>
            </div>
            <div className="grid z-10 grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    { src: js, alt: "JavaScript" },
                    { src: tailwind, alt: "Tailwind CSS" },
                    { src: react, alt: "React" },
                    { src: html, alt: "HTML" },
                    { src: css, alt: "CSS" },
                    { src: bootstrap, alt: "Bootstrap" },
                ].map((tech, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={index}
                        className="grayscale border border-zinc-700 hover:grayscale-0 rounded-xl p-4 flex items-center justify-center"
                    >
                        <img className="w-[100px] h-auto" src={tech.src} alt={tech.alt} />
                    </motion.div>
                ))}
            </div>
            <div className="absolute right-24  w-[200px] h-[200px] rounded-full bg-[#CDEA68] blur-[100px]"></div>
        </div>
    );
};

export default Quotes;
