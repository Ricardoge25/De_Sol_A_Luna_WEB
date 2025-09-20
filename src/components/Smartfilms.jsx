export default function Smartfilms() {
  const categoria = [
    {
      id: 1,
      logo: "smartfilmsLogo.jpg",
      categoria: "Aficionado",
      inicio: "26/09/2025 - 15:00",
      cierre: "27/09/2025 - 15:00", 
    },
    {
      id:2,
      logo: "smartfilmsLogo.jpg",
      categoria: "Revolucionarias",
      inicio: "26/09/2025 - 15:00",
      cierre: "27/09/2025 - 15:00",
    },
  ] 

  const logos = [
    { id: 1,
      src: "smartfilms-logo.jpg",
      alt: "Smartfilms Logo",
    },
    {
      id: 2,
      src: "proquidentLogo.png",
      alt: "Proquident Logo",
    },
    {
      id: 3,
      src: "mintic-logo.jpg",
      alt: "Mintic Logo",
    },
    {
      id: 4,
      src: "sonrident-logo.jpeg",
      alt: "Sonrident Logo",
    }
  ];

    return (
    <section id="SmartFilms" className="w-full py-24 bg-shadow-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">SmartFilms 2025 </h2>
        <p className="text-2xl font-serif font-semibold mt-2 mb-12">Nominaciones</p>
        {/* Tarjetas de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 py-10">
          {categoria.map((cat) => (
          
            <div 
              key={cat.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col items-center hover:scale-105 transition-transform duration-500"
            >
              <img 
                src={cat.logo}
                alt={cat.categoria}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{cat.categoria}</h3>
              <div className="flex justify-between w-full text-sm text-gray-900 mt-8 px-10">
                <p>
                  <span className="font-semibold">Inicio de votaciones:</span><br />
                  {cat.inicio}
                </p>
                <p>
                  <span className="font-semibold">Cierre de votaciones:</span><br />
                  {cat.cierre}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center place-items-center">
          {logos.map ((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  )
}