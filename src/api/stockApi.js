import axios from 'axios';

// TODO: double check this url
const API_URL = `${process.env.REACT_APP_API_URL}/stockApi.php`;

export const stockIn = async (stockData) => {
  const response = await axios.post(API_URL, { action: 'stock_in', ...stockData });
  return response.data;
};

export const stockOut = async (stockData) => {
  const response = await axios.post(API_URL, { action: 'stock_out', ...stockData });
  return response.data;
};

export const fetchStockReport = async () => {
  const response = await axios.get(`${API_URL}?action=report`);
  return response.data;
};
