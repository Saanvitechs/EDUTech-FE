// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
// import Mocks from './components/Mocks';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import TestPage from './components/TestPage';
// import ThankYouPage from './components/ThankYouPage';
// import MembershipPlans from './components/MembershipPlans';
// import ForgotPassword from './components/ForgotPassword';

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
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

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
import MyProfile from './components/MyProfile'; // Import the MyProfile component

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
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
