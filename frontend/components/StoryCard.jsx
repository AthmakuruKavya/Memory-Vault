import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton.jsx';

const StoryCard = ({ story, onToggleFavorite }) => {
  return (
    <Link to={`/story/${story.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2">
            <FavoriteButton 
              isFavorite={story.isFavorite} 
              onClick={() => onToggleFavorite(story.id)} 
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1 mb-2">{story.title}</h3>
          
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-3">
             <span className="flex items-center">
                <i className="far fa-calendar-alt mr-1"></i>
                {new Date(story.date).toLocaleDateString()}
             </span>
             {story.location && (
                <span className="flex items-center truncate">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {story.location}
                </span>
             )}
          </div>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
            {story.description}
          </p>
          
          <div className="mt-auto pt-3 border-t border-gray-100 text-brand-600 text-sm font-medium group-hover:text-brand-800 flex items-center">
            Read Memory <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;