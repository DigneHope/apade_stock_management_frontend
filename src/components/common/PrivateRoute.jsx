import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
    <Route
    
      {...rest}
      render={() =>
        isAuthenticated ? (
          children
        ) : (
            <Navigate to="/login" />
        )
      }
    />
    </Routes>
  );
};

export default PrivateRoute;
