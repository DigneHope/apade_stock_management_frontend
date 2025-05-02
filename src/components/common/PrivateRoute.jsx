import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
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
  );
};

export default PrivateRoute;
