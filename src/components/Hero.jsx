import { FaCamera } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  return(
    <section className="bg-[url('/FondoDesolaluna.png')] bg-cover bg-center min-h-screen px-6 text-center py-[50px]">
      {/* CONTENEDOR PRINCIPAL */}
      <div >
        {/* Titulo */}
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          De Sol a Luna
        </h1>
        {/* Subtitulo */}
        <p className="text-lg md:text-xl text-shadow-8 max-w-2xl mx-auto mb-8">
          Aquí iría una frase amorcito 😁😁😁
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <Link
            key="Galeria"
            to="Galeria"
            smooth={true}
            duration={500}
            href="#Galeria"
            className="flex items-center gap-2 bg-shadow-10 text-shadow-1 px-5 py-2 rounded-md shadow-md hover:bg-blue-400 transition"
          >
            <FaCamera />
            Detrás de Cámaras
          </Link>
          <Link
            key="Votar"
            to="Votar"
            smooth={true}
            duration={800}
            href="#Votar" 
            className="flex items-center gap-2 bg-shadow-4 font-semibold text-shadow-10 px-5 py-2 rounded-md shadow-md hover:bg-blue-400 transition"
          >
            Votar
          </Link>
        </div>

        {/* Imagen Principal */}
        <div className="max-w-2xl mx-auto">
          <img
            src="horizontaldesolaluna.jpg"
            alt="Imagen Principal de De Sol a Luna"
            className="w-full md:h-96 object-cover rounded-md shadow-lg shadow-yellow-400"
          />
        </div>
      </div>
    </section>
  )
}