import axiosInstance from './axiosInstance';

export const loginService = async (email, password) => {
  const { data } = await axiosInstance.post('/auth/login', { email, password });
  return data;
};

export const signupService = async (username, email, password) => {
  const { data } = await axiosInstance.post('/auth/signup', { username, email, password });
  return data;
};

export const forgotPasswordService = async (email) => {
  // Placeholder for future implementation
  // const { data } = await axiosInstance.post('/auth/forgot-password', { email });
  return { message: 'Password reset email sent' };
};