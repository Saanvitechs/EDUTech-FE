// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import Test from './components/Test';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Mocks from './components/Mocks';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import TestPage from './components/TestPage';
import ThankYouPage from './components/ThankYouPage';
import PricingPage from './components/PricingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mocks" element={<Mocks />} />
        <Route path="/test/:testId" element={<TestPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;

