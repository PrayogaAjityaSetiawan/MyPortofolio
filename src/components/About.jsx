import foto from "../assets/foto.jpg"

const About = () => {

    const scholls = ["Budi Luhur University", "MAN 4 Jombang", "SMPN 2 Modo"]

    return (
            <div  data-scroll data-scroll-section data-scroll-speed=".1" className=" bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl md:max-h-screen ">
                <div className="py-10 mx-5 md:mx-20 text-black">
                    <h1 className="text-2xl md:text-4xl  font-Primary leading-normal"> Prayoga Ajitya Setiawan, a 4nd semester student of Informatics Engineering Budi Luhur University,<span className="underline decoration-wavy decoration-lime-50">I am from Lamongan, East Java,</span>  and now living in Jakarta I want to become a <span className="underline decoration-wavy decoration-[#004D43]">frondend programmer.</span></h1>
                </div>
                <div className="border-t-[1px] font-Primary  py-10 border-white">
                    <div className="flex flex-col md:flex-row md:items-center gap-5 ">
                        <div className="md:w-1/2 mx-5  md:mx-20">
                            <h1 className="text-4xl md:text-7xl font-medium text-zinc-700 uppercase mb-5 ">Education</h1>
                            <ul className="list-disc list-inside">
                                {scholls.map((scholl,index )=> (
                                    <li key={index} className="text-lg text-zinc-700 font-semibold underline decoration-wavy decoration-white">
                                    {scholl} 
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 ">
                            <img className="w-1/2 md:w-1/4 bg-cover mx-auto rounded-md" src={foto} alt="Prayoga Ajitya Setiawan" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;