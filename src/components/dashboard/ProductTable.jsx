import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
//import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Componente para mostrar la tabla de productos, recibe los productos, la función para abrir el modal y la función para eliminar un producto como props y retorna la tabla con los productos usando map para mostrarlos en la tabla y botones para editar y eliminar los productos
const ProductTable = ({ products, handleDelete }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Accions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.nombre}</TableCell>
              <TableCell>{product.descripcion}</TableCell>
              <TableCell>
                {/*<Button onClick={() => handleOpen(product)}><EditIcon/></Button>*/}
                <Button onClick={() => handleDelete(product.id)}><DeleteForeverIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;