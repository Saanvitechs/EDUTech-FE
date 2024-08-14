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
//               <a href="/forgot-password" style={{ color: '#1565C0', textDecoration: 'none' }}>Forgot Password?</a>
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
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic (replace with actual logic)
    if (username === 'testuser' && password === 'password123') {
      setError(''); // Clear any existing errors
      navigate('/home'); // Redirect to the homepage after successful login
    } else {
      setError('Invalid username or password. Please try again.'); // Set an error message
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              TestPortal
            </Typography>
          </Box>
          <form onSubmit={handleLogin}>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                error={!!error} // Display error if there's an issue
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                error={!!error} // Display error if there's an issue
              />
            </Box>
            {error && (
              <Typography variant="body2" color="error" style={{ marginBottom: '15px' }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
            >
              Get Started
            </Button>
          </form>
          <Box mt={3} display="flex" justifyContent="space-between">
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/register" style={{ color: '#1565C0', textDecoration: 'none' }}>Create Account</a>
            </Typography>
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/forgot-password" style={{ color: '#1565C0', textDecoration: 'none' }}>Forgot Password?</a>
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
