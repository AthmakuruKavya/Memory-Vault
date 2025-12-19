import React from 'react';

const Input = ({ label, error, textarea, className, ...props }) => {
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
        <input
            {...props}
            className={`${baseClasses} ${borderClasses}`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;