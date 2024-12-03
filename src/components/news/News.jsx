import NewsCard from "./NewsCard"

const News = () => {
      
  return (
    <section >
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900 text-center mt-10" >Lastest Art News</h1>
        <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:-mx-6">
                <div className="lg:w-3/4 lg:px-6">
                    <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.pexels.com/photos/3779191/pexels-photo-3779191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                   <div>
                        <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-black-800 ">
                         
                        </h1>
                    </div>
                </div>
                <div className="mt-8 lg:w-1/4 lg:mt-4 lg:px-6 flex gap-10 flex-col" >
                    <NewsCard/>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default News