import React from 'react';

const SearchBar = ({ value, onChange, onSubmit, placeholder = "Search...", className = "" }) => {
  return (
    <form onSubmit={onSubmit} className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
        value={value}
        onChange={onChange}
      />
      <button 
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-brand-600 transition-colors"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;