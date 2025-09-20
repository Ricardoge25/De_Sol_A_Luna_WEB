import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen);

const menuItems = ["Sinopsis", "Galeria", "SmartFilms", "Equipo"];
  return (
    <header className="w-full fixed top-0 left-0 bg-shadow-1 shadow-sm z-50">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.png"
            alt="De Sol a Luna Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Menu Hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-shadow-10 focus:outline-none hover:text-blue-700 transition text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {/* Navegacion */}
        <nav className="hidden md:flex items-center space-x-8 text-shadow-10 font-medium text-lg">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-700 transition"
            >
              {item}
            </Link>
          ))}
          {/* Botón */}
          <a
            href="#Link de votacion"
            className="flex items-center bg-shadow-10 text-white px-4 py-2 rounded-full text-sm font-normal hover:bg-blue-700 transition"
          >
            Vota por Nosotros
          </a>
        </nav>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 items-end pr-6 pb-4 bg-shadow-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-shadow-10 font-medium text-xl hover:text-blue-700 transition"
              onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}