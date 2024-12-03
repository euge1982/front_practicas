const Team = () => {

    const teamMembers = [
        { name: ' Eugenia Mora', role: 'Developer' },
        { name: 'Gomez Ignacio', role: 'Developer' },
        { name: 'Jessica Conejero', role: 'Developer' },
      ]

  return (
    <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Our  Team</h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team