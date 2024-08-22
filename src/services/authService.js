import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '', // Ensure token is prefixed with Bearer
    },
  });
};


const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'signup', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'login', {
      username,
      password,
    });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return localStorage.getItem('token');
};

const fetchProtectedData = async () => {
  try {
    const response = await axiosWithAuth().get('/protected-route');
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error('Error requesting OTP:', error.response?.data || error.message);
    throw error;
  }
};

const resetPassword = async (email, newPassword, otp) => {
  try {
    const response = await axios.post(`${API_URL}reset-password`, { email, newPassword, otp });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error.response?.data || error.message);
    throw error;
  }
};

const authService = {
  axiosWithAuth,
  register,
  login,
  logout,
  getCurrentUser,
  fetchProtectedData,
  forgotPassword,
  resetPassword,
};

export default authService;
