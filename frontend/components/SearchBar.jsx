import React from 'react';

const SearchBar = ({ value, onChange, onSubmit, placeholder = "Search your vault...", className = "" }) => {
  return (
    <form onSubmit={onSubmit} className={`relative w-full ${className}`}>
      <button 
          type="submit"
          className="absolute left-0 top-0 h-full px-3 text-gray-500 hover:text-brand-600 transition-colors"
      >
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;