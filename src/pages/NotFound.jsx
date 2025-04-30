import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import TiltCard from '../components/TiltCard'; // 👈 We'll create this CSS next!

function NotFound() {
  return (
    <AnimatedPage>
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/manage-users">
        <button>Return to Dashboard</button>
      </Link>
    </div>
     </AnimatedPage>
  );
}

export default NotFound;
