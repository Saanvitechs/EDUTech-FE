// import React, { useState } from 'react';
// import authService from '../services/authService';

// const Login = ({ history }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await authService.login(email, password);
//       history.push('/');
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import authService from '../services/authService';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await authService.login(email, password);
//       navigate('/');
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div className="input-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import './Login.css';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
// import logoImage from '../images/logo1.svg'; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          {/* <img src={logoImage} alt="Logo" className="login-logo" /> */}
        </div>
        <div className="login-right">
          <div className="login-header">
            <h2>Log in to your Account</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">Log in</button>
          </form>
          <div className="login-footer">
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            <p className="other-login-options">Other login options</p>
            <div className="social-login">
              <button className="social-btn google-btn">Google</button>
              <button className="social-btn facebook-btn">Facebook</button>
              {/* <button className="social-btn apple-btn">Apple</button> */}
            </div>
            <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
            {/* <a href="/organization-login" className="organization-login">Log in with your organization</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
