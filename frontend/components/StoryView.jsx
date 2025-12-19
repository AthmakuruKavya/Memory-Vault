import React from 'react';

const StoryView = ({ story, onEdit, onDelete }) => {
  if (!story) return null;

  return (
    <div>
        <div className="relative h-96 bg-gray-900">
            <img src={story.image} alt={story.title} className="w-full h-full object-contain opacity-90" />
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between bg-gradient-to-b from-black/50 to-transparent">
                <span className="text-white bg-black/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    <i className="far fa-calendar-alt mr-2"></i>
                    {new Date(story.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                {story.isFavorite && <i className="fas fa-heart text-red-500 text-2xl drop-shadow-lg"></i>}
            </div>
        </div>

        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{story.title}</h1>
                    {story.location && (
                        <p className="text-gray-500 flex items-center">
                            <i className="fas fa-map-marker-alt mr-2 text-brand-500"></i> {story.location}
                        </p>
                    )}
                </div>
                <div className="flex space-x-2">
                    <button onClick={onEdit} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full" title="Edit">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={onDelete} className="p-2 text-red-600 hover:bg-red-50 rounded-full" title="Delete">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {story.description}
            </div>
        </div>
    </div>
  );
};

export default StoryView;