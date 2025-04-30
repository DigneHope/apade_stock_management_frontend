// components/layout/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../common/ParticlesBackground"; // Background effect component
import PrivateRoute from "../common/PrivateRoute"; // Private Route Component
import UserList from "../userlist/UserList"; // UserList Component

const Layout = () => {
  return (
    <div className="layout-container">
      <ParticlesBackground />
      <header>
        <h1>Stock Management</h1>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <main>
        <PrivateRoute path="/users" component={UserList} />
        {/* Add other routes here */}
      </main>
    </div>
  );
};

export default Layout;
