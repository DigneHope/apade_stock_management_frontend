// components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>APADE Stock System</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/stock">Stock</Link>
        <Link to="/users">Users</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
