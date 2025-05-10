import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <center>
        <div className="about-us">
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!</p>
          <Link to="/users">
            <button className="nav-button">MANAGEUSER</button>
          </Link>
        </div>
        
        <div className="dashboard-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!</p>
          <Link to="/products">
            <button className="nav-button">MANAGEPRODUCT</button>
          </Link>
        </div>
        
        <div className="dashboard-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!</p>
          <Link to="/stock-in">
            <button className="nav-button">STOCKIN</button>
          </Link>
        </div>
        
        <div className="dashboard-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!</p>
          <Link to="/stock-out">
            <button className="nav-button">STOCKOUT</button>
          </Link>
        </div>
       
        <div className="dashboard-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium tempore cupiditate in ratione fuga dolorem inventore iusto vel at. Ut atque vero quasi, delectus nemo nostrum eaque nobis officiis!E</p>
          <Link to="/stock-report">
            <button className="nav-button">STOCKREPORT</button>
          </Link>
        </div>
      </div>
    </div>
    </center>
  );
}

export default AboutUs;