import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks.js';
import { toggleFavoriteLocal } from '../store/storiesSlice.js';
import StoryList from '../components/StoryList.jsx';
import { getFavoriteStoriesService, toggleFavoriteService } from '../services/story.service.js';
import toast from 'react-hot-toast';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const [favoriteStories, setFavoriteStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const data = await getFavoriteStoriesService();
        setFavoriteStories(data);
      } catch (err) {
        toast.error('Failed to load favorites');
      } finally {
        setLoading(false);
      }
    };
    loadFavorites();
  }, []);

  const handleToggleFavorite = async (id) => {
    // Optimistic update: Remove from list immediately
    const storyToRemove = favoriteStories.find(s => s.id === id);
    setFavoriteStories(prev => prev.filter(s => s.id !== id));
    
    // Update global state as well so Home page stays in sync
    dispatch(toggleFavoriteLocal(id));

    try {
        await toggleFavoriteService(id);
    } catch (err) {
        // Revert on failure
        if (storyToRemove) {
             setFavoriteStories(prev => [...prev, storyToRemove]);
        }
        dispatch(toggleFavoriteLocal(id));
        toast.error('Failed to update favorite');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <i className="fas fa-heart text-red-500 mr-3"></i> My Favorites
      </h1>

      {loading ? (
           <div className="flex justify-center items-center h-64"><i className="fas fa-spinner fa-spin text-4xl text-brand-500"></i></div>
      ) : (
        <StoryList 
            stories={favoriteStories} 
            onToggleFavorite={handleToggleFavorite}
            emptyMessage="You haven't marked any memories as favorites yet."
        />
      )}
    </div>
  );
};

export default Favorites;