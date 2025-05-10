import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import Login from './Login';
import SignUp from './SignUp';
import UserDashboard from './UserDashboard';
import Booking from './Booking';
import Chatbot from './ChatBot';
import AdminPage from './AdminPage';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected User Routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/booking-orders" element={<Booking />} />
          <Route path="/chatbot" element={<Chatbot />} />

          {/* Protected Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminPage/>} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AppLayout from './AppLayout';
// import Login from './Login';
// import SignUp from './SignUp';
// import UserDashboard from './UserDashboard';
// import Booking from './Booking';
// import Chatbot from './ChatBot';
// import AdminDashboard from './AdminDashboard';

// function App() {
//   return (
//     <Router>
//       <AppLayout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* Protected User Routes */}
//           <Route path="/user-dashboard" element={<UserDashboard />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/chatbot" element={<Chatbot />} />

//           {/* Protected Admin Routes */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         </Routes>
//       </AppLayout>
//     </Router>
//   );
// }

// export default App;
