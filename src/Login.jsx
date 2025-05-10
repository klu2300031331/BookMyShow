import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
<link rel="stylesheet" href="home.css"></link>
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the backend
      const response = await axios.post('http://localhost:9091/users/signin', credentials);

      // Log the entire response to inspect
      console.log("Login response:", response.data);

      // Destructuring role, name, and email from the response
      const { email, role, name } = response.data;

      // Logging role and email to debug
      console.log("Role:", role, "Email:", email);

      // Save role and name to localStorage
      localStorage.setItem('role', role);
      localStorage.setItem('name', name);

      alert('Login successful: ' + name);

      // Check if the logged-in email is the admin email
      const adminEmail = "Thota@gmail.com"; // Define admin email here

      if (email === adminEmail) {  // Admin check based on email
        navigate('/admin-dashboard');
      } else {  // User check based on email
        navigate('/user-dashboard');
      }
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        required
        value={credentials.email}
        onChange={e => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={credentials.password}
        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>

      <p><Link to="/admin-dashboard">.</Link></p>
      <p style={{ marginTop: '15px' }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
}

export default Login;
