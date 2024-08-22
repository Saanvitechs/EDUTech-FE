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
import TestPage from './components/TestPage';
import authService from './services/authService';

import ForgotPassword from './components/ForgotPassword';
import MyProfile from './components/MyProfile';
import ProtectedRoute from './components/ProtectedRoute';
import ArithmeticAptitude from './components/prepare/ArithmeticAptitude';
import DataInterpretation from './components/prepare/DataInterpretation';
import VerbalAbility from './components/prepare/VerbalAbility';
import LogicalReasoning from './components/prepare/LogicalReasoning';
import VerbalReasoning from './components/prepare/VerbalReasoning';
import PlacementPapers from './components/prepare/PlacementPapers';
import GroupDiscussion from './components/prepare/GroupDiscussion';
import HrInterview from './components/prepare/HrInterview';
import Cprogramming from './components/prepare/Cprogramming';
import CppProgramming from './components/prepare/CppProgramming';
import JavaProgramming from './components/prepare/JavaProgramming';
import TestPage from './components/prepare/TestPage';
import AptitudeTest from './components/AptitudeTest';
import LogicalTest from './components/prepare/LogicalTest';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protect these routes */}
          {/* <Route 
            path="/mocks" 
            element={
              <ProtectedRoute>
                <Mocks />
              </ProtectedRoute>
            } 
          /> */}
          <Route 
            path="/test/:testId" 
            element={
              <ProtectedRoute>
                <TestPage />
              </ProtectedRoute>
            }
          />



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

function PrivateRoute({ component: Component, ...rest }) {
  const user = authService.getCurrentUser();
  return user ? <Component {...rest} /> : <Navigate to="/login" replace />;
}

export default App;