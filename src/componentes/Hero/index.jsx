import { useEffect, useState } from "react";

const heroImage = "/images/students-1.png";

function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Alumno", "Escolar", "Lector", "Universitario", "Educando"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    return (
        <section
            className="flex items-center hero w-full bg-gradient-to-b from-celeste/50  from-0% via-celeste/25 via-10% to-white"
            style={{ height: 'calc(100vh - 128px)' }}
        >
            <div className="container mx-auto flex flex-wrap max-w-7xl">
                <div className="w-full md:w-1/2 xl:w-7/12 px-4">
                    <span className=" md:text-left text-center italic text-lg tagline block text-primarySupra mb-2">
                        "La lectura es la llave a un mundo de conocimiento."
                    </span>
                    <h1 className="h-32 text-5xl md:w-full xl:w-9/12 font-bold text-slate-800 mb-4">
                        Hola somos <span className="text-6xl text-celeste">Supra </span> <br /> <span className="wrap">{text}</span>
                    </h1>
                    <p className="text-primarySupra mb-6 md:w-full xl:w-7/12 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid quam dolore ipsa
                        exercitationem debitis vero harum quo voluptas eveniet deserunt, illo consequuntur dolores
                        doloremque molestiae repellendus odit, ducimus sit!
                    </p>
                    <div className="flex flex-row gap-4">
                        <button
                            className="bg-celeste text-white px-8 py-2 rounded-xl hover:bg-white hover:text-celeste hover:border hover:border-celeste transition duration-300"
                            onClick={() => console.log('connect')}
                        >
                            Ver Noticias
                        </button>
                        <button
                            className="bg-white border border-celeste text-celeste px-8 py-2 rounded-xl hover:bg-celeste hover:text-white hover:border hover:border-white transition duration-300"
                            onClick={() => console.log('connect')}
                        >
                            Ver Libros
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-5/12 px-4 flex items-center">
                    <img src={heroImage} alt="Supra-hero" className="max-w-full h-96 object-cover" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
