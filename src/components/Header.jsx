import logo from "/Logo.png"; // ajusta la ruta al logo real


export default function Header() {
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

        {/* Navegacion */}
        <nav className="flex items-center space-x-8 text-shadow-10  font-medium text-xl">
          <a href="#sinopsis" className="hover:text-shadow-8 transition">Sinopsis</a>
          <a href="#equipo" className="hover:text-shadow-8 transition">Equipo</a>
          <a href="#smartfilms" className="hover:text-shadow-8 transition">SmartFilms</a>

          {/* Botón */}
          <a
            href="#Link de votacion"
            className="flex items-center bg-shadow-10 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-shadow-8 transition"
          >
            Vota por Nosotros
          </a>
        </nav>
      </div>
    </header>
  )
}