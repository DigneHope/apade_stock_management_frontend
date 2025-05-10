import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import './LayOut.css';

function LayOut() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Placeholder for logout logic (e.g., clear auth token, local storage, etc.)
    navigate('/login');
  };

  return (
    <div className={`layout ${darkMode ? 'dark' : ''}`}>
      <nav className="layout-nav fixed-nav">
        <ul>
          <li>
            <Link to="/users">Manage user</Link>
          </li>
          <li>
            <Link to="/products">Manage product</Link>
          </li>
          <li>
            <Link to="/stock-in">Stock in</Link>
          </li>
          <li>
            <Link to="/stock-out">Stock out</Link>
          </li>
          <li>
            <Link to="/stock-report">Stock report</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default LayOut;