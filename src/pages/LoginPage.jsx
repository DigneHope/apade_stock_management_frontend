import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';
// import TiltCard from '../components/TiltCard';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/backend/login.php', {
        email,
        password,
      });

      if (response.data.success) {
        toast.success('Login successful!');
        setShowConfetti(true);

        setTimeout(() => {
          navigate('/layout');
        }, 2000); // wait 2 sec for confetti party 🎉
      } else {
        toast.error('Invalid Email or password');
      }
    } catch (error) {
      toast.error('Login error: ' + error.message);
    }
  };

  return (
    <div className="login-page">
      {showConfetti && <Confetti />}
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
