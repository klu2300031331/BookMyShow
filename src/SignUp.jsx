// import React, { useState } from 'react';
// import axios from 'axios';
// <link rel="stylesheet" href="home.css"></link>
// import './SignUp.css';
// import { Link, useNavigate } from 'react-router-dom';

// function SignUp() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     role: 'User',
//   });

//   const navigate = useNavigate();

//   const validateInput = () => {
//     const emailValid = user.email.endsWith('@gmail.com');
//     const phoneValid = /^[0-9]{10}$/.test(user.phone);

//     if (!emailValid) {
//       alert('Email must end with @gmail.com');
//       return false;
//     }

//     if (!phoneValid) {
//       alert('Phone number must be exactly 10 digits');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInput()) return;

//     try {
//       await axios.post('http://localhost:9090/api/users/signup', user);
//       alert('Signup successful');
//       navigate('/login');
//     } catch (err) {
//       alert('Signup failed');
//     }
//   };

//   return (
//     <div className="signup-wrapper">
//       <form onSubmit={handleSubmit} className="signup-form">
//         <h2>Signup</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={user.phone}
//           onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//         />
//         <select
//           value={user.role}
//           onChange={(e) => setUser({ ...user, role: e.target.value })}
//           required
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button type="submit">Sign Up</button>
//         <p style={{ marginTop: '15px' }}>
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;




// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignUp.css';
// import { Link, useNavigate } from 'react-router-dom';

// function SignUp() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     role: 'User'  // Default role
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:9090/api/users/signup', user);
//       alert('Signup successful');
//       navigate('/login'); // Redirect to login page after successful signup
//     } catch (err) {
//       alert('Signup failed');
//     }
//   };

//   return (
//     <div className="signup-wrapper">
//       <form onSubmit={handleSubmit} className="signup-form">
//         <h2>Signup</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={user.name}
//           onChange={e => setUser({ ...user, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={e => setUser({ ...user, email: e.target.value })}
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={user.phone}
//           onChange={e => setUser({ ...user, phone: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={e => setUser({ ...user, password: e.target.value })}
//           required
//         />
//         <select
//           value={user.role}
//           onChange={e => setUser({ ...user, role: e.target.value })}
//           required
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button type="submit">Sign Up</button>
        
//         <p style={{ marginTop: '15px' }}>
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;



import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({
    fullname: '',  // Updated field name
    email: '',
    password: '',
    role: 'User',  // Default role
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update role from 'User' to numeric value (1 for User)
    const requestData = {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      role: user.role === 'User' ? 1 : 2,  // Convert role to 1 for User, 2 for Admin
    };

    try {
      // Post to the new endpoint (9091)
      await axios.post('http://localhost:9091/users/signup', requestData);
      alert('Signup successful');
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-wrapper">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={user.fullname}
          onChange={e => setUser({ ...user, fullname: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          required
        />
        <select
          value={user.role}
          onChange={e => setUser({ ...user, role: e.target.value })}
          required
        >
            <option value={1}>User</option>
            <option value={2}>Admin</option>
        </select>
        <button type="submit">Sign Up</button>
        
        <p style={{ marginTop: '15px' }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
