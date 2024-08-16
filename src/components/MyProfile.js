// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
// import authService from '../services/authService'; // Ensure you have a service for API calls

// const MyProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const data = await authService.getUserDetails(); // Fetch user details from API
//         setUserData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <Card raised style={{ maxWidth: '100%', margin: '20px auto', padding: '120px', textAlign: 'center' }}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           User Profile
//         </Typography>
//         {userData ? (
//           <>
//             <Typography variant="body1"><strong>Username:</strong> {userData.username}</Typography>
//             <Typography variant="body1"><strong>Name:</strong> {userData.name}</Typography>
//             <Typography variant="body1"><strong>Surname:</strong> {userData.surname}</Typography>
//             <Typography variant="body1"><strong>Mobile Number:</strong> {userData.mobile}</Typography>
//             <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
//           </>
//         ) : (
//           <Typography variant="body1">No user data available.</Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default MyProfile;


import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, CircularProgress } from '@mui/material';
import authService from '../services/authService';
import './MyProfile.css';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await authService.axiosWithAuth().get('/user/profile');
        setProfile(data.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="profile-loading">
        <CircularProgress />
      </div>
    );
  }

  if (!profile) {
    return <Typography variant="h6" color="error">Failed to load profile.</Typography>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" className="profile-container">
      <Grid item xs={12} md={6}>
        <Card className="profile-card">
          <CardContent>
            <div className="profile-avatar">
              <Avatar
                alt={profile.name}
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <Typography variant="h5" align="center" className="profile-name">
              {profile.name} {profile.surname}
            </Typography>
            <Typography variant="body1" align="center">
              Username: {profile.username}
            </Typography>
            <Typography variant="body1" align="center">
              Email: {profile.email}
            </Typography>
            <Typography variant="body1" align="center">
              Mobile: {profile.mobileNumber}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyProfile;
