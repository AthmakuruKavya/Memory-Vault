import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://memory-vault-backend-c2bi.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Global Errors (like 401)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Optional: Redirect to login or dispatch logout action if you have access to store
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
