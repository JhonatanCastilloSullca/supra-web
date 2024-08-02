import Hero from "../../componentes/Hero";
const imagePortada = "/images/portada-libro.jpg";


function Home() {


    return (
        <>
            <Hero />

            <section className="relative items-center hero w-full py-20 bg-section">
                <div className="relative z-10 items-center container mx-auto flex flex-col max-w-screen-2xl">
                    <h3 className="text-4xl font-bold mb-4">Recomendado para ti</h3>
                    <h4 className="text-lg font-light max-w-4xl text-center">Te recomendamos algunos libros populares que puedes explorar y elegir para comprar. Descubre más de nuestra colección visitando nuestra tienda.</h4>
                    <div className="flex w-full">
                        <div className="h-[50hw] bg-black w-full md:w-1/3 xl:w-1/3 flex flex-row ">
                            <div className="content-image flex flex-col gap-28 w-1/2 items-center place-content-center">
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                            </div>
                            <div className="content-image flex flex-col gap-28 w-1/2 items-center mt-12 place-content-center">
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                            </div>
                        </div>
                        <div className="h-[50hw] bg-celeste w-full md:w-1/3 xl:w-1/3">
                            <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />

                        </div>
                        <div className="h-[50hw] bg-black w-full md:w-1/3 xl:w-1/3 flex flex-row ">
                            <div className="content-image flex flex-col gap-28 w-1/2 items-center place-content-center mt-12">
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                            </div>
                            <div className="content-image flex flex-col gap-28 w-1/2 items-center  place-content-center">
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                                <img src={imagePortada} alt="portada-libro" className="w-36 h-56" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>




    )
}

export default Home