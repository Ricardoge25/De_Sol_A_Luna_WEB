export default function Sinopsis() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-300 to-white pb-[260px]">
      <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center">
        Sinopsis
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="text-shadow-9 leadeing-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            rutrum ex. Donec finibus ligula et est eleifend cursus. Maecenas
            molestie metus et nibh interdum, ac tempor odio egestas. Maecenas
            placerat tincidunt velit, eget ornare est elementum in. Ut quis nibh
            in mi pulvinar eleifend quis vel augue. Phasellus malesuada velit
            vel finibus hendrerit. Sed sodales porttitor neque non tempus. Cras
            lorem nibh, vulputate hendrerit est et, cursus vestibulum leo.
            Pellentesque nec diam sit amet odio aliquam placerat vel at turpis.
            Nullam placerat consequat volutpat. Vivamus rhoncus ligula non
            iaculis scelerisque. Sed blandit vel purus nec feugiat. Suspendisse
            potenti. Phasellus pretium sapien sed bibendum rutrum. Suspendisse
            semper pharetra tortor ut molestie.
          </p>

          {/* Cita */}
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-500 ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            rutrum ex. Donec finibus ligula et est eleifend cursus. Maecenas
            molestie metus et nibh interdum, ac tempor odio egestas. Maecenas
            placerat tincidunt velit, eget ornare est elementum in. Ut quis nibh
            in mi pulvinar eleifend quis vel augue. Phasellus malesuada velit
            vel finibus hendrerit. Sed sodales porttitor neque non tempus. Cras
            lorem nibh, vulputate hendrerit est et, cursus vestibulum leo."<br />
            
          </blockquote>
          <span className="font-semibold not-italic pt-6 block">
            - Elizabeth Patricia Rivero
          </span>
        </div>
        {/* Imagen */}
        <div className="flex justify-center">
          <img 
            src="/Logo2.png" 
            alt=""
            className="rounded-2xl shadow-lg h-auto shadow-yellow-400" />
        </div>
      </div>
    </section>
  );
}
