export default function Sinopsis() {
  return (
    <section
      id="Sinopsis"
      className="w-full py-24 bg-gradient-to-r from-gray-300 to-white my-5"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center">
        Sinopsis
      </h2>
      <div className="max-w-[1300px] mx-10 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="text-shadow-9 leading-relaxed mb-6 text-2xl">
            Tras la muerte de su mascota, Mateo se aísla en la tristeza y el
            desorden de un hogar que ya no siente como suyo. Una caja inesperada
            y la presencia insistente de un gato lo confrontan con el recuerdo y
            la posibilidad de sanar.
          </p>

          {/* Cita */}
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-500 ">
            "Cortometraje sobre el duelo, el amor por los animales y los nuevos comienzos."
            <br />
          </blockquote>
          <span className="font-semibold italic pt-6 block">
            - Directora del corto
          </span>
        </div>
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="verticalsolaluna.png"
            alt=""
            className="rounded-2xl shadow-lg shadow-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}
