// Importaciones necesarias
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const logo = "/images/Logo1.PNG";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full">
            <header className=" h-32 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="logo-supra" className="w-52 hover:scale-105 transition-all" />
                </a>
                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white hover:px-4 hover:py-2 rounded-md transition-all"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-3">
                        <NavLink
                            to="/libros"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white hover:px-4 hover:py-2 rounded-md transition-all"
                            }
                        >
                            Libros
                        </NavLink>
                    </li>
                    <li className="p-3">
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white hover:px-4 hover:py-2 rounded-md transition-all"
                            }
                        >
                            Nosotros
                        </NavLink>
                    </li>
                    <li className="p-3">
                        <NavLink
                            to="/noticias"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white hover:px-4 hover:py-2 rounded-md transition-all"
                            }
                        >
                            Noticias
                        </NavLink>
                    </li>
                </ul>
                <div className="relative hidden md:flex items-center justify-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaSearch />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-celeste focus:border-celeste dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-celeste dark:focus:border-celeste"
                            placeholder="Search..."
                            required
                        />
                    </div>
                </div>
                <FaBars
                    className="xl:hidden block text-5xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <div
                    className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ transition: "transform 0.3s ease, opacity .3s ease" }}
                >
                    <li className="list-none w-full text-center p-4 hover:bg-celeste hover:text-white transition-all cursor-pointer">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-celeste hover:text-white transition-all cursor-pointer">
                        <NavLink
                            to="/libros"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Libros
                        </NavLink>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-celeste hover:text-white transition-all cursor-pointer">
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Nosotros
                        </NavLink>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-celeste hover:text-white transition-all cursor-pointer">
                        <NavLink
                            to="/noticias"
                            className={({ isActive }) =>
                                isActive ? "text-celeste" : "hover:bg-celeste hover:text-white"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Noticias
                        </NavLink>
                    </li>
                </div>
            </header>
        </div>
    );
};

export default Header;
