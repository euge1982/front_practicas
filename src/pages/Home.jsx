import Hero from '../components/hero/Hero'
import LastProducts from '../components/last-products/LastProducts'
import News from '../components/news/News'


const Home = () => {
  return (
    <>
      <Hero/>
      <News/>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900 text-center mt-10">
        Our Last Products 🔥
      </h1>
      <LastProducts/>
    </>
    
  )
}

export default Home