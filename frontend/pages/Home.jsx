import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.js';
import { fetchStoriesStart, fetchStoriesSuccess, fetchStoriesFailure, toggleFavoriteLocal, setOnThisDayStories } from '../store/storiesSlice.js';
import StoryList from '../components/StoryList.jsx';
import { getAllStoriesService, toggleFavoriteService, getOnThisDayStoriesService } from '../services/story.service.js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items: stories, onThisDayItems, loading, error, searchTerm } = useAppSelector((state) => state.stories);

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
    
    const loadOnThisDay = async () => {
        try {
            const data = await getOnThisDayStoriesService();
            dispatch(setOnThisDayStories(data));
        } catch (err) {
            console.error("Failed to load 'On This Day' stories", err);
        }
    };

    loadStories();
    loadOnThisDay();
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
      
      {/* On This Day Section */}
      {!searchTerm && onThisDayItems.length > 0 && (
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center mb-4">
             <div className="bg-brand-100 p-2 rounded-full mr-3">
                <i className="fas fa-history text-brand-600"></i>
             </div>
             <h2 className="text-xl font-bold text-gray-800">On This Day</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {onThisDayItems.map(story => {
                const yearsAgo = new Date().getFullYear() - new Date(story.date).getFullYear();
                return (
                   <Link key={story.id} to={`/story/${story.id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-brand-100">
                      <div className="flex h-24 sm:h-28">
                          <div className="w-1/3 relative overflow-hidden bg-gray-100">
                             <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="w-2/3 p-3 flex flex-col justify-center">
                             <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1">
                                {yearsAgo} Year{yearsAgo > 1 ? 's' : ''} Ago
                             </p>
                             <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 text-sm sm:text-base">{story.title}</h3>
                             {story.location && <p className="text-xs text-gray-500 mt-1 truncate"><i className="fas fa-map-marker-alt mr-1"></i>{story.location}</p>}
                          </div>
                      </div>
                   </Link>
                )
            })}
          </div>
        </div>
      )}

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