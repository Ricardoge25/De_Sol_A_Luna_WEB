import teamMembers from '../data/teamMembers'

export default function Team() {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">
          Equipo Creativo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-shadow-2 rounded-lg shadow-xl border-2 border-gray-800 p-6 flex flex-col items-center transition-transform hover:scale-110 hover:shadow-2xl"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-3 border-gray-200 mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}