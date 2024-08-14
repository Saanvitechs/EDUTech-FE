// import React, { useState } from 'react';
// import './Login.css';
// import authService from '../services/authService';
// import { useNavigate } from 'react-router-dom';
// // import logoImage from '../images/logo1.svg'; // Adjust the path as needed

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
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-left">
//           {/* <img src={logoImage} alt="Logo" className="login-logo" /> */}
//         </div>
//         <div className="login-right">
//           <div className="login-header">
//             <h2>Log in to your Account</h2>
//           </div>
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="btn">Log in</button>
//           </form>
//           <div className="login-footer">
//             <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
//             <p className="other-login-options">Other login options</p>
//             <div className="social-login">
//               <button className="social-btn google-btn">Google</button>
//               <button className="social-btn facebook-btn">Facebook</button>
//               {/* <button className="social-btn apple-btn">Apple</button> */}
//             </div>
//             <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
//             {/* <a href="/organization-login" className="organization-login">Log in with your organization</a> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Grid, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     if (username && password) {
//       navigate('/home'); // Redirect to the homepage after successful login
//     } else {
//       alert('Please fill out both fields.');
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card raised style={{ padding: '50px', borderRadius: '20px',  backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
//           <Box mb={3}>
//             <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
//               TestPortal
//             </Typography>
//           </Box>
//           <form onSubmit={handleLogin}>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//               />
//             </Box>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//             >
//               Get Started
//             </Button>
//           </form>
//           <Box mt={3} display="flex" justifyContent="space-between">
//             <Typography variant="body2" style={{ color: '#1565C0' }}>
//               <a href="/register" style={{ color: '#1565C0', textDecoration: 'none' }}>Create Account</a>
//             </Typography>
//             <Typography variant="body2" style={{ color: '#1565C0' }}>
//               <a href="https://saanvitechs.com/contact.php" style={{ color: '#1565C0', textDecoration: 'none' }}>Need Help?</a>
//             </Typography>
//           </Box>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill out both fields.');
      return;
    }

    try {
      // Call the login function from the authService
      await authService.login(username, password);
      navigate('/home'); // Redirect to the homepage after successful login
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: '100vh',
        backgroundImage: `url(${require('./images/login.svg').default})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card
          raised
          style={{
            padding: '50px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              TestPortal
            </Typography>
          </Box>
          <form onSubmit={handleLogin}>
            {error && (
              <Typography variant="body2" color="error" gutterBottom>
                {error}
              </Typography>
            )}
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  marginBottom: '10px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '10px',
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: '#F5F5F5',
                  borderRadius: '10px',
                }}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: '#1565C0',
                color: '#fff',
                borderRadius: '30px',
                padding: '10px',
              }}
            >
              Get Started
            </Button>
          </form>
          <Box mt={3} display="flex" justifyContent="space-between">
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/register" style={{ color: '#1565C0', textDecoration: 'none' }}>
                Create Account
              </a>
            </Typography>
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/forgot-password" style={{ color: '#1565C0', textDecoration: 'none' }}>
                Forgot Password?
              </a>
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
