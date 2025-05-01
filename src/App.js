import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserList from './components/user/UserList';
import ProductList from './components/product/ProductList';
import AddUserForm from './components/user/AddUserForm';
import AddProductForm from './components/product/AddProductForm';
import EditUserForm from './components/user/EditUserForm';
import EditProductForm from './components/product/EditProductForm';
import StockReport from './components/stock/StockReport';
import StockIn from './components/stock/StockIn';
import StockOut from './components/stock/StockOut';
import ParticlesBackground from './components/common/ParticlesBackground';
import Spinner from './components/common/Spinner';
import './assets/styles/darkmode.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <ParticlesBackground />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<UserList />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/add" element={<AddUserForm />} />
            <Route path="users/edit/:id" element={<EditUserForm />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/add" element={<AddProductForm />} />
            <Route path="products/edit/:id" element={<EditProductForm />} />
            <Route path="stock-in" element={<StockIn />} />
            <Route path="stock-out" element={<StockOut />} />
            <Route path="stock-report" element={<StockReport />} />
          </Route>

          {/* 404 Page Not Found */}
          <Route path="*" element={<div className="page-not-found"><h1>404 Not Found 😢</h1></div>} />
        </Routes>

        {/* Global Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </Router>

      {/* Global Spinner (optional you can control its visibility later) */}
      <Spinner />
    </div>
  );
}

export default App;
