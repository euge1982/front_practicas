import axios from "axios";  

const API_URL = "http://localhost:3000/api/v1";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/producto`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

export const createProduct = async (productData, token) => {
    try {
        const response = await axios.post(`${API_URL}/producto`, productData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw error;
    }
}

export const updateProduct = async (id, productData, token) => {
    try {
        const response = await axios.patch(`${API_URL}/producto/${id}`, productData, {
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'multipart/form-data',
                
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
}

export const deleteProduct = async (id, token) => {
    try {
        await axios.delete(`${API_URL}/producto/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
};