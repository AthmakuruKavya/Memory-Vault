import React from 'react';

const FavoriteButton = ({ isFavorite, onClick, className = '' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full shadow-sm hover:bg-white transition-colors ${className} ${isFavorite ? 'bg-white' : 'bg-white/80'}`}
      title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    >
      <i className={`${isFavorite ? 'fas text-red-500' : 'far text-gray-500'} fa-heart text-lg`}></i>
    </button>
  );
};

export default FavoriteButton;