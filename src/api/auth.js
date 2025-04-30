import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login.php`, {
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
