import { Container, Typography, Button } from '@mui/material';
import ProductForm from '../components/dashboard/ProductForm';
import ProductTable from '../components/dashboard/ProductTable';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../axios/products';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const Dashboard = () => {
  const [products, setProducts] = useState([]); //useState para guardar los productos
  const [open, setOpen] = useState(false); //useState para abrir y cerrar el formulario
  const [currentProduct, setCurrentProduct] = useState(null); //useState para guardar el producto actual

  // useSelector para obtener el token del usuario
  const token = useSelector((state) => state.user.currentUser.access_token);

  // Decodifica el token
  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
 
  // useEffect para obtener los productos
  useEffect(() => {
    fetchProductsData();
  }, []);

  // Función para obtener los productos
  const fetchProductsData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  // Funciones para abrir y cerrar el formulario
  const handleOpen = (product = null) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  // Función para cerrar el formulario
  const handleClose = () => {
    setCurrentProduct(null);
    setOpen(false);
  };

  // Función para enviar el formulario
  const handleSubmit = async (formData) => {
    try {
      if (currentProduct) {
        await updateProduct(currentProduct.id, formData, token);
      } else {
        await createProduct(formData, token);
      }
      // Si el formulario tiene una imagen, se envía a la API
      if (formData.get('image')) {
        const imageFormData = new FormData();
        imageFormData.append('imagen', formData.get('imagen'));
        
        await axios.post('http://localhost:3000/', imageFormData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Tipo de contenido
            'Authorization': `Bearer ${token}` // Token de autorización
          }
        });
      }
      // Se obtienen los productos nuevamente
      fetchProductsData();
      handleClose(); // Se cierra el formulario
    } catch (error) {
      // Manejo de errores
      console.error('Error al enviar el formulario:', error);
    }
  };

  // Función para eliminar un producto
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id, token); // Se elimina el producto de la API con el id y el token
      fetchProductsData();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  // Si el rol del usuario no es SUPER o ADMIN, se muestra un mensaje de error y se redirige a la página principal en 3 segundos
  if (role !== "SUPER" && role !== "ADMIN") {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
         <p className='flex justify-center items-center text-3xl font-bold '>Usted no tiene permiso para acceder a esta seccion</p>
         <p className='flex justify-center items-center text-xl font-bold '>Sera redirigido en 3 segundos</p>
          {setTimeout(() => {
            window.location.href = '/';
          }, 3000)}
      </div>
    );
  }
 
  return (

    <Container className='flex flex-col items-start gap-4 mt-6'>
      <Typography variant="h4" component="h1" gutterBottom>
        ArtWork Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add ArtWork
      </Button>
      <div className='flex flex-col gap-4'>
        <ProductTable products={products} handleOpen={handleOpen} handleDelete={handleDelete} />
        <ProductForm open={open} handleClose={handleClose} handleSubmit={handleSubmit} currentProduct={currentProduct} />
      </div>
    </Container>
  );
}

export default Dashboard;

