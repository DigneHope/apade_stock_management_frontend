import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoutes';
import LayOut from './pages/LayOut';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ManageUser from './pages/ManageUser';
import ManageProduct from './pages/ManageProduct';
import AboutUs from './pages/AboutUs';
import StockIn from './components/stock/StockIn';
import StockOut from './components/stock/StockOut';
import { ThemeProvider } from './context/ThemeContext';
import StockReport from './pages/StockReport';
import { StockProvider } from './context/StockContext';

function App() {
  return (
    <ThemeProvider>
      <StockProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LayOut />
                </ProtectedRoute>
              }
            >
              <Route index element={<ManageUser />} />
              <Route path="users" element={<ManageUser />} />
              <Route path="products" element={<ManageProduct />} />
              <Route path="stock-in" element={<StockIn />} />
              <Route path="stock-out" element={<StockOut />} />
              <Route path="stock-report" element={<StockReport />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="logout" element={<Navigate to="/login" replace />} />
            </Route>

            {/* 404 Page Not Found */}
            <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
          </Routes>
        </Router>
      </StockProvider>
    </ThemeProvider>
  );
}

export default App;