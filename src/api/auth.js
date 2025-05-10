import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost/apade_stock_management_backend/public/api/login`, {
      email,
      password,
    });
    return response.data; // assuming JWT is in the response
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export const logout = () => {
  // Remove JWT from local storage or cookies
  localStorage.removeItem("token");
};

// TODO: registerUser
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};
