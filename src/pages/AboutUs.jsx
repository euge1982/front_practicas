import Team from "../components/team/Team"


const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a passionate team dedicated to creating innovative solutions that make a difference in peoples lives.
            Our mission is to leverage technology to solve real-world problems and empower businesses to thrive in the digital age.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/*Mapea las caracteristicas de la empresa */}
            {['Innovation', 'Quality', 'Customer Focus'].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
        <Team/>
    </section>
  )
}

export default AboutUs