import { Link } from 'react-router-dom';
import hero from '../../assets/hero.webp';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="text-white body-font bg-gray-900 w-full">
      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Galery Art</h1>
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod consequuntur rerum quam voluptate praesentium ducimus eveniet atque tempora consequatur, aut exercitationem explicabo, animi perferendis doloremque quasi illum delectus quis.</p>
          <div className="flex justify-center">
            {/*Link a la galeria hecha en ThreeJS*/}
            <Button>
              <Link to="#" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Open Gallery
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:hidden md:block">
          <img className="object-cover object-center rounded" alt="hero" src={hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;