export default function Gallery() {
  return (
    <section id="Galeria" className="w-full bg-shadow-1 py-24 px-6 lg:px-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Galería Visual
        </h2>

        {/* Video */}
        <div className="w-full max-w-4xl aspect-video mb-12 mx-auto">
          <video
            src="Makingof.mp4"
            controls
            controlsList="nodownload"
            className="w-full h-full rounded-lg shadow-xl shadow-yellow-400"
          />
        </div>

        {/* Imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src="GaleriaVisual1.png"
              alt="Galeria Visual 1"
              className="w-full h-64 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src="galeria-visual-2.jpg"
              alt="Galeria Visual 2"
              className="w-full h-64 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src="GaleriaVisual1.png"
              alt="Galeria Visual 3"
              className="w-full h-64 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src="Logo2.png"
              alt=""
              className="w-full h-64 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
        </div>
      </div>
      

    </section>
  )
}