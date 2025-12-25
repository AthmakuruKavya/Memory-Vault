import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../components/Input.jsx';
import { signupService } from '../services/auth.service.js';
import { useAppDispatch } from '../store/hooks.js';
import { loginSuccess } from '../store/authSlice.js';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const data = await signupService(formData.username, formData.email, formData.password);
      dispatch(loginSuccess(data));
      toast.success('Account created successfully!');
      navigate('/vault');
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || 'Signup failed';
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-brand-50 px-4">
      {/* Horizontal container: image (left) + signup card (right). Keep no wrapping and stretch so heights match */}
      <div className="flex items-stretch flex-nowrap">
        {/* Image (left) */}
        <div className="w-80 flex-shrink-0 rounded-l-xl shadow-sm border border-gray-100 border-r-0 overflow-hidden relative z-0 min-h-0 hidden md:block">
          <img
            src="/auth/signup.jpg"
            alt="Photo frames"
            className="object-cover w-full h-full"
          />
          {/* Quote overlay bottom-left */}
          <div className="absolute bottom-0 left-0 p-6">
            <p
              className="font-serif text-2xl md:text-3xl leading-tight font-black text-white"
              style={{ color: '#ffffff', textShadow: '0 4px 10px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif' }}
            >
              <span className="block">Store your moments</span>
              <span className="block mt-1">relive your stories</span>
            </p>
          </div>
        </div>

        {/* Signup card (right) - overlaps the image slightly from right using negative margin and higher z-index */}
        <div className="md:-ml-6 z-20 flex-shrink-0 w-full md:w-auto">
          <div className="w-full md:w-[420px] max-w-[calc(100vw-2rem)] space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100 md:border-l-0 h-full flex flex-col justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
                <p className="mt-2 text-sm text-gray-600">Start storing your memories today</p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                 <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <><i className="fas fa-circle-notch fa-spin mr-2"></i>Creating Account...</>
                ) : (
                  'Sign Up'
                )}
              </button>
            </form>
            
            <div className="text-center text-sm">
                <span className="text-gray-600">Already have an account? </span>
                <Link to="/login" className="font-medium text-brand-600 hover:text-brand-500">
                    Log in
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;