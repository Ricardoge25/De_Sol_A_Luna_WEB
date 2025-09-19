export default function Gallery() {
  return (
    <section className="w-full bg-shadow-1 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Galería Visual
        </h2>

        {/* Video */}
        <div className="w-full h-72 lg:h-[450px] mb-12">
          <iframe
            className="w-full h-full rouded-lg shadow-lg shadow-yellow-400"
            src="https://www.youtube.com/embed/2zNSgSzhBfM"
            title="Teaser de De Sol a Luna"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src=""
              alt=""
              className="w-full h-48 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src=""
              alt=""
              className="w-full h-48 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
          <div className="relative overflow-hiden rounded-lg shadow-lg">
            <img
              src=""
              alt=""
              className="w-full h-48 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400"
            />
          </div>
        </div>
      </div>
      

    </section>
  )
}