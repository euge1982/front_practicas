import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../axios/products';
import { Button } from '../ui/button';


const LastProducts = () => {

  // Hook para guardar los productos en el estado 
  const [products, setProducts] = useState([]);

  // Hook para obtener los productos al cargar el componente 
  useEffect(() => {
    // Función para obtener los productos
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        // Ordenar los productos por id y obtener los últimos 3
        const lastThreeProducts = fetchedProducts.sort((a, b) => b.id - a.id).slice(0, 3);
        // Guardar los últimos 3 productos en el estado
        setProducts(lastThreeProducts);
      } catch (error) {
        // Manejar el error
        console.error('Error al obtener los productos:', error);
      }
    };
    // Llamar a la función para obtener los productos
    getProducts();
  }, []);

  if (!products.length) {
    return <p>No artwork available</p>;
  }

  return (
    <div className='flex flex-col items-center gap-7 mb-8 px-4'>
      <div className='flex gap-4 flex-wrap justify-center sm:flex-col md:flex-col lg:flex-col xl:flex-row'>
        {products.map((product) => (
          <div key={product.id}>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="w-full h-60 ">
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:3000/${product.imagen}`} 
                  alt={product.nombre}
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{product.nombre}</h2>
                  <p className="text-sm text-gray-600">{product.descripcion}</p>
                </div>              
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button>
          <Link to="/products">
            See more
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LastProducts;
