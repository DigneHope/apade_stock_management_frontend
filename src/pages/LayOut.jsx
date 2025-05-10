import React, { useContext } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import './LayOut.css';

function LayOut() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    
    navigate('/login');
  };

  const dashboardContent = (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <p>TEXT ABOUT THE MANAGE USER PAGE</p>
        <Link to="/users">
          <button className="nav-button">MANAGEUSER</button>
        </Link>
      </div>
      <div className="dashboard-card">
        <p>TEXT ABOUT THE MANAGE PRODUCT PAGE</p>
        <Link to="/products">
          <button className="nav-button">MANAGEPRODUCT</button>
        </Link>
      </div>
      <div className="dashboard-card">
        <p>TEXT ABOUT THE STOCK IN PAGE</p>
        <Link to="/stock-in">
          <button className="nav-button">STOCKIN</button>
        </Link>
      </div>
      <div className="dashboard-card">
        <p>TEXT ABOUT THE STOCK OUT PAGE</p>
        <Link to="/stock-out">
          <button className="nav-button">STOCKOUT</button>
        </Link>
      </div>
      <div className="dashboard-card">
        <p>TEXT ABOUT THE STOCK REPORT PAGE</p>
        <Link to="/stock-report">
          <button className="nav-button">STOCKREPORT</button>
        </Link>
      </div>
    </div>
  );

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
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="layout-content">
        {location.pathname === '/layout' ? dashboardContent : <Outlet />}
      </div>
    </div>
  );
}

export default LayOut;