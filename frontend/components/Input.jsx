import React, { useState } from 'react';

const Input = ({ label, error, textarea, className, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Determine if this is a password field and what type to render
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const baseClasses = "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors";
  const borderClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
            {...props}
            className={`${baseClasses} ${borderClasses} min-h-[100px]`}
        />
      ) : (
        <div className="relative">
            <input
                {...props}
                type={inputType}
                className={`${baseClasses} ${borderClasses} ${isPassword ? 'pr-10' : ''}`}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
            )}
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;