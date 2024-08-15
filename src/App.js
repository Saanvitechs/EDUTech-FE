// import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
// import Mocks from './components/Mocks';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import TestPage from './components/TestPage';
// import ThankYouPage from './components/ThankYouPage';
// import MembershipPlans from './components/MembershipPlans';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/mocks" element={<Mocks />} />
//         <Route path="/test/:testId" element={<TestPage />} />
//         <Route path="/thank-you" element={<ThankYouPage />} />
//         <Route path="/membership-plans" element={<MembershipPlans />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
// import Mocks from './components/Mocks';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import MembershipPlans from './components/MembershipPlans';
// import TestPage from './components/TestPage';
// import ForgotPassword from './components/ForgotPassword';
// import authService from './services/authService';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = authService.getCurrentUser();
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     authService.logout();
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <div className="App">
//       <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/mocks" element={<Mocks />} />
//         <Route path="/membership-plans" element={<MembershipPlans />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/test/:id" element={<PrivateRoute component={TestPage} />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   const user = authService.getCurrentUser();
//   return user ? <Component {...rest} /> : <Navigate to="/login" replace />;
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
// import Mocks from './components/Mocks';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import MembershipPlans from './components/MembershipPlans';
// import TestPage from './components/TestPage';
// import authService from './services/authService';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = authService.getCurrentUser();
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     authService.logout();
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <div className="App">
//       <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/mocks" element={<Mocks />} />
//         <Route path="/membership-plans" element={<MembershipPlans />} />
//         <Route path="/test/:id" element={<PrivateRoute component={TestPage} />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   const user = authService.getCurrentUser();
//   return user ? <Component {...rest} /> : <Navigate to="/login" replace />;
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './hooks/AuthContext';
import Home from './components/Home';
import Mocks from './components/Mocks';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import TestPage from './components/TestPage';
import ThankYouPage from './components/ThankYouPage';
import MembershipPlans from './components/MembershipPlans';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mocks" element={<Mocks />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;