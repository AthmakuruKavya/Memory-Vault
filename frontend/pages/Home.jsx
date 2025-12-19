import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.js';
import { fetchStoriesStart, fetchStoriesSuccess, fetchStoriesFailure, toggleFavoriteLocal } from '../store/storiesSlice.js';
import StoryList from '../components/StoryList.jsx';
import { getAllStoriesService, toggleFavoriteService } from '../services/story.service.js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items: stories, loading, error, searchTerm } = useAppSelector((state) => state.stories);

  useEffect(() => {
    const loadStories = async () => {
      dispatch(fetchStoriesStart());
      try {
        const data = await getAllStoriesService();
        dispatch(fetchStoriesSuccess(data));
      } catch (err) {
        const errorMsg = err.response?.data?.message || err.message || 'Failed to load stories';
        dispatch(fetchStoriesFailure(errorMsg));
        toast.error(errorMsg);
      }
    };
    loadStories();
  }, [dispatch]);

  const handleToggleFavorite = async (id) => {
    dispatch(toggleFavoriteLocal(id)); 
    try {
        await toggleFavoriteService(id);
    } catch (err) {
        dispatch(toggleFavoriteLocal(id)); 
        toast.error('Failed to update favorite');
    }
  };

  const filteredStories = stories.filter(story => {
      if (!searchTerm) return true;
      return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading && stories.length === 0) {
      return <div className="flex justify-center items-center h-64"><i className="fas fa-spinner fa-spin text-4xl text-brand-500"></i></div>;
  }

  if (error) {
      return <div className="text-center text-red-500 mt-10 p-4 border border-red-200 rounded-lg bg-red-50">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-[calc(100vh-4rem)]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Memory Vault</h1>
      </div>

      <StoryList 
        stories={filteredStories} 
        onToggleFavorite={handleToggleFavorite}
        showCreateLink={true}
        emptyMessage={searchTerm ? "No memories match your search." : "No memories found."}
      />

      {/* Floating Action Button (FAB) */}
      <Link
        to="/create"
        className="fixed bottom-8 right-8 w-14 h-14 bg-brand-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-brand-700 hover:scale-105 transition-all duration-300 z-50 group"
        title="Add New Memory"
      >
        <i className="fas fa-plus text-2xl group-hover:rotate-90 transition-transform duration-300"></i>
      </Link>
    </div>
  );
};

export default Home;