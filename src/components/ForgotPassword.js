import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1 for OTP request, 2 for password change
  const navigate = useNavigate();

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      await authService.forgotPassword(emailOrPhone); // Call backend to request OTP
      setStep(2); // Move to the next step
    } catch (error) {
      console.error('Error sending OTP:', error.response?.data || error.message);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await authService.resetPassword(emailOrPhone, newPassword, otp); // Call backend to reset password
      alert('Password changed successfully');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error changing password:', error.response?.data || error.message);
      alert('Failed to change password. Please try again.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              Forgot Password
            </Typography>
          </Box>
          {step === 1 && (
            <form onSubmit={handleRequestOtp}>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email or Phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Send OTP
              </Button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleResetPassword}>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Reset Password
              </Button>
            </form>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
