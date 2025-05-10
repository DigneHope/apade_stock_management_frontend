import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/StockApi.php`;

export const fetchProductId = async (productName) => {
  const response = await axios.get(`${API_URL}?action=getProductId&name=${encodeURIComponent(productName)}`);
  return response.data;
};

export const stockIn = async (stockData) => {
  const response = await axios.post('http://localhost/apade_stock_management_backend/stock/stockin.php', stockData);
  return response.data;
};

export const stockOut = async (stockData) => {
  const response = await axios.post('http://localhost/apade_stock_management_backend/stock/stockout.php', stockData);
  return response.data;
};

export const fetchStockReport = async () => {
  const response = await axios.get(`http://localhost/apade_stock_management_backend/stock/stockreport.php?action=report`);
  return response.data;
};