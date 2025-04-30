// components/layout/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
