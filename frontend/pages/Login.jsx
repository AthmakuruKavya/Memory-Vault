import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/Input.jsx";
import { useAppDispatch } from "../store/hooks.js";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice.js";
import {
  loginService,
} from "../services/auth.service.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(loginStart());

    try {
      const data = await loginService(email, password);
      dispatch(loginSuccess(data));
      toast.success("Login successful");
      navigate("/vault");
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Login failed";
      dispatch(loginFailure(errorMsg));
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-brand-50 px-4">
      {/* Horizontal container: image (left) + login card (right). Keep no wrapping and stretch so heights match */}
      <div className="flex items-stretch flex-nowrap">
        {/* Image (left) */}
        <div className="w-80 flex-shrink-0 rounded-l-xl shadow-sm border border-gray-100 border-r-0 overflow-hidden relative z-0 min-h-0 hidden md:block">
          <img
            src="/auth/login.jpg"
            alt="Emotional storytelling"
            className="object-cover w-full h-full"
          />
          {/* Quote overlay bottom-left */}
          <div className="absolute bottom-0 left-0 p-6">
            <p
              className="font-serif text-2xl md:text-3xl leading-tight font-black text-white"
              style={{
                color: "#ffffff",
                textShadow: "0 4px 10px rgba(0,0,0,0.6)",
                fontFamily: "Georgia, serif",
              }}
            >
              <span className="block">
                <span className="font-semibold">Photos</span> capture faces
              </span>
              <span className="block mt-1">
                <span className="font-semibold">Stories</span> capture feelings
              </span>
            </p>
          </div>
        </div>

        {/* Login card (right) - overlaps the image slightly from right using negative margin and higher z-index */}
        <div className="md:-ml-6 z-20 flex-shrink-0 w-full md:w-auto">
          <div className="w-full md:w-[420px] max-w-[calc(100vw-2rem)] space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100 md:border-l-0 h-full flex flex-col justify-center">
            <div className="text-center">
              <i className="fas fa-book-open text-brand-600 text-4xl mb-4"></i>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to access your memory vault
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-4"
                />
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mb-2"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/signup"
                className="font-medium text-brand-600 hover:text-brand-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;