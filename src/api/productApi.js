// api/product.js
import axios from "axios";

export const addStock = async (stockData) => {
  const response = await axios.post("/api/stock/in", stockData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const removeStock = async (stockData) => {
  const response = await axios.post("/api/stock/out", stockData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// TODO: addProduct
export const addProduct = async (productData) => {
  const response = await axios.post('/api/products', productData);
  return response.data;
};

// TODO: updateProduct
export const updateProduct = async (productId, productData) => {
  const response = await axios.put(`/products/${productId}`, productData);
  return response.data;
};

// TODO: getStockReport
export const fetchStockReport = () => { }
