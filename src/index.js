import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 👈 Correct! It should point to your new App.jsx
import './index.css'; // Optional if you have global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
