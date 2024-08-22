import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyProfile.css';

function MyProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Assuming username is stored in local storage after login
                const username = localStorage.getItem('username');
                
                // Fetch profile data from backend
                const response = await axios.get(`http://localhost:8080/api/profile`, {
                    params: { username },
                    withCredentials: true, // Send cookies with the request for session management
                });
                setProfile(response.data);
            } catch (err) {
                setError('Failed to fetch profile data.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="profile-container">
            {profile ? (
                <div className="profile-card">
                    <h2>{profile.username}</h2>
                    <p>Email: {profile.email}</p>
                    <p>Full Name: {profile.fullName}</p>
                    <p>Role: {profile.role}</p>
                </div>
            ) : (
                <div>Profile not found.</div>
            )}
        </div>
    );
}

export default MyProfile;
