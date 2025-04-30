import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/productApi.php';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}?action=list`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(API_URL, { action: 'add', ...productData });
  return response.data;
};

export const updateProduct = async (productData) => {
  const response = await axios.post(API_URL, { action: 'update', ...productData });
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axios.post(API_URL, { action: 'delete', id: productId });
  return response.data;
};
