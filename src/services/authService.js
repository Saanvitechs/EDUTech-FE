
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/auth';

// const login = async (email, password) => {
//   const response = await axios.post(`${API_URL}/login`, { email, password });
//   localStorage.setItem('user', JSON.stringify(response.data));
// };

// const register = async (name, email, password) => {
//   await axios.post(`${API_URL}/register`, { name, email, password });
// };

// const logout = () => {
//   localStorage.removeItem('user');
// };

// const authService = {
//   login,
//   register,
//   logout,
// };

// export default authService;
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

// Login service to authenticate the user and store the token in localStorage
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const userData = response.data;

    // Store the user data and JWT token in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;  // Ensure the error is thrown for further handling
  }
};

// Register service to create a new user
const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Logout service to clear the localStorage
const logout = () => {
  localStorage.removeItem('user');
};

// Helper function to create axios instance with Authorization header
const axiosWithAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`, // Attach the token if available
    },
  });
};

const authService = {
  login,
  register,
  logout,
  axiosWithAuth,  // Export axiosWithAuth for protected routes
};

export default authService;
