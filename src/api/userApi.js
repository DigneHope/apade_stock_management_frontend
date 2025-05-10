import axios from 'axios';


// TODO: double check this url
const API_URL = `${process.env.VITE_API_URL}/productApi.php`;

export const getUsers = async () => {
  const response = await axios.get( "http://localhost/apade_stock_management_backend/user/get_user.php");
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(API_URL, { action: 'add', ...productData });
  return response.data;
};

export const updateUser = async (productData) => { };

export const deleteProduct = async (productId) => {
  const response = await axios.post(API_URL, { action: 'delete', id: productId });
  return response.data;
};
