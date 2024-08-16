// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/auth/';

// const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');
//   return axios.create({
//     baseURL: API_URL,
//     headers: {
//       Authorization: `${token}`,
//     },
//   });
// };

// const register = async (firstName, lastName, username, email, password) => {
//   try {
//     const response = await axios.post(API_URL + 'register', {
//       firstName,
//       lastName,
//       username,
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Registration failed:', error);
//     throw error;
//   }
// };

// const login = async (username, password) => {
//   try {
//     const response = await axios.post(API_URL + 'login', {
//       username,
//       password,
//     });
    
    
//     // Extracting the token from the response
//     if (response.data && response.data.accessToken) {
//       const token = response.data.accessToken.split(' ')[1]; // Removes the 'Bearer' prefix
//       localStorage.setItem('token', token);
//       return response.data;
//     } else {
//       throw new Error('Login failed: No token received');
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//     throw error;
//   }
// };

// const logout = () => {
//   localStorage.removeItem('token');
// };

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem('token'));
// };

// const fetchProtectedData = async () => {
//   try {
//     const response = await axiosWithAuth().get('/protected-route');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching protected data:', error);
//     throw error;
//   }
// };

// const authService = {
//   register,
//   login,
//   logout,
//   getCurrentUser,
//   fetchProtectedData,
// };

// export default authService;


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token, // Ensure token is passed without adding Bearer if it already has it
    },
  });
};

const register = async (firstName, lastName, username, email, phoneNumber,password) => {
  try {
    const response = await axios.post(API_URL + 'register', {
      firstName,
      lastName,
      username,
      phoneNumber,
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
    const response = await axios.post(API_URL + 'login', {
      username,
      password,
    });

    // Handle token extraction correctly
    const token = response.data?.accessToken?.split(' ')[1];
    if (token) {
      localStorage.setItem('token', token);  // Store the token in localStorage
      return response.data;
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
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

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  fetchProtectedData,
};

export default authService;
