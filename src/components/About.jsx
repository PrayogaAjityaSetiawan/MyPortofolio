import foto from "../assets/foto.jpg"

const About = () => {

    const textAbout = "Prayoga Ajitya Setiawan, a 4nd semester student of Informatics Engineering Budi Luhur University,I am from Lamongan, East Java, and now living in Jakarta I want to become a frondend programmer."

    const textStack = ['HTML', 'CSS', 'JAVASCRIPT', 'TAILWINDCSS', 'BOOTSTRAP', 'REACT']

    return (
        <section 
        data-scroll 
        data-scroll-section 
        data-scroll-speed=".1" 
        className="bg-[#CDEA68] py-4 rounded-tl-2xl rounded-tr-2xl md:max-h-screen ">
            <div className="mx-5 md:mx-20 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                    <img className="mx-auto md:mx-0 h-full w-[40%] object-cover bg-cover" src={foto} alt="" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                    <p className="font-Primary text-zinc-500 text-base md:text-xl">{textAbout}</p>
                        <div className="mt-5 md:mt-0">
                            <span className="font-Primary font-medium text-2xl ">Tech Stack</span>
                            <div className="grid grid-cols-3 gap-3 font-Primary capitalize">
                                {textStack.map((item, index) => (
                                    <span key={index} className="bg-[#004D43] text-sm md:text-base text-white p-2 rounded-lg">{item}
                                    </span>              
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default About;