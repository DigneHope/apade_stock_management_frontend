import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-header">
    
          <h1>APADE STOCK MANAGEMENT SYSTEM</h1>
          
        <p>This system was built to Manage products, users, stocks and view the report this project is containing react and php, it was done during internship.</p>
        <div className="developers-info">
          
          <h3>NAMES OF DEVELOPERS:</h3>
          
          <ul>
            <li>NAZE Digne</li>
            <li>MUSABIMANA Hope</li>
          </ul>
          
          <h3>LEVELS OF DEVELOPERS:</h3>
          
          <p>Level 5 SOFTWARE DEVELOPMENT</p>
          
          <h3>What used when creating our project:</h3>
          
          <ul>
            <li>In Frontend we used React</li>
            <li>In Backend we used php and mysql (common database)</li>
          </ul>
          
        </div>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <p>TEXT ABOUT THE MANAGE USER PAGE</p>
          <Link to="/users">
            <button className="nav-button">MANAGEUSER</button>
          </Link>
        </div>
        <div className="dashboard-card center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum, officia exercitationem, quaerat, ex magnam inventore dolorem temporibus quo quasi maxime beatae ullam repellendus aspernatur quos dolores ipsam voluptatibus atque!</p>
          <Link to="/stock-report">
            <button className="nav-button">STOCKREPORT</button>
          </Link>
        </div>
        <div className="dashboard-card">
          <p>TEXT ABOUT THE STOCK IN PAGE</p>
          <Link to="/stock-in">
            <button className="nav-button">STOCKIN</button>
          </Link>
        </div>
        <div className="dashboard-card">
          <p>TEXT ABOUT THE STOCK IN PAGE</p>
          <Link to="/stock-out">
            <button className="nav-button">STOCKOUT</button>
          </Link>
        </div>
        <div className="dashboard-card">
          <p>TEXT ABOUT THE STOCK REPORT PAGE</p>
          <Link to="/products">
            <button className="nav-button">MANAGEPRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;