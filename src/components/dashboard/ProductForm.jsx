import { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Input } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Componente para crear o editar un producto
// Recibe las siguientes props: open, handleClose, handleSubmit, currentProduct de Dashboard
const ProductForm = ({ open, handleClose, handleSubmit, currentProduct }) => {
  // Estado para guardar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState(null);

  // Función para manejar el cambio de archivo
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  // Función para manejar el envío del formulario
  // Si hay un archivo seleccionado, lo agrega al formulario, y llama a la función handleSubmit 
  // append la imagen al formData para que se pueda enviar 
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (selectedFile) {
      formData.append('imagen', selectedFile);
    }
    handleSubmit(formData);
  };

  return (
    
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{currentProduct ? '' : 'Add ArtWork'}</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="nombre"
            label="Name"
            type="text"
            fullWidth
            defaultValue={currentProduct?.nombre || ''}
          />
          <TextField
            margin="dense"
            name="descripcion"
            label="Description"
            type="text"
            fullWidth
            defaultValue={currentProduct?.descripcion || ''}
          />
          <Input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="imagen"
          />
          <label htmlFor="imagen">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
              style={{ marginTop: '1rem' }}
            >
              Upload Image
            </Button>
          </label>
          {selectedFile && <p>{selectedFile.name}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" color="primary">
            {currentProduct ? '' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductForm;

