
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

const register = async (firstName, lastName, username, email, password) => {
  try {
    const response = await axios.post(API_URL + 'register', {
      firstName,
      lastName,
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); // Store token in local storage
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;  }
};


const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
