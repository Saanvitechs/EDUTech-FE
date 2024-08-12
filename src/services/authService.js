// // import axios from 'axios';

// // const API_URL = 'http://localhost:8080/api/auth';

// // const login = async (email, password) => {
// //   const response = await axios.post(`${API_URL}/login`, { email, password });
// //   localStorage.setItem('user', JSON.stringify(response.data));
// // };

// // const register = async (name, email, password) => {
// //   await axios.post(`${API_URL}/register`, { name, email, password });
// // };

// // const logout = () => {
// //   localStorage.removeItem('user');
// // };

// // const authService = {
// //   login,
// //   register,
// //   logout,
// // };

// // export default authService;
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

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('user', JSON.stringify(response.data));
};

const register = async (name, email, password) => {
  await axios.post(`${API_URL}/register`, { name, email, password });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
