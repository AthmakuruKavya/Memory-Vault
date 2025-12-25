// import React, { useEffect, useMemo } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hooks.js';
// import { fetchStoriesStart, fetchStoriesSuccess, fetchStoriesFailure, toggleFavoriteLocal, setOnThisDayStories } from '../store/storiesSlice.js';
// import StoryList from '../components/StoryList.jsx';
// import { getAllStoriesService, toggleFavoriteService, getOnThisDayStoriesService } from '../services/story.service.js';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const { items: stories, onThisDayItems, loading, error, searchTerm } = useAppSelector((state) => state.stories);

//   useEffect(() => {
//     const loadStories = async () => {
//       dispatch(fetchStoriesStart());
//       try {
//         const data = await getAllStoriesService();
//         dispatch(fetchStoriesSuccess(data));
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || err.message || 'Failed to load stories';
//         dispatch(fetchStoriesFailure(errorMsg));
//         toast.error(errorMsg);
//       }
//     };
    
//     const loadOnThisDay = async () => {
//         try {
//             const data = await getOnThisDayStoriesService();
//             dispatch(setOnThisDayStories(data));
//         } catch (err) {
//             console.error("Failed to load 'On This Day' stories", err);
//         }
//     };

//     loadStories();
//     loadOnThisDay();
//   }, [dispatch]);

//   const handleToggleFavorite = async (id) => {
//     dispatch(toggleFavoriteLocal(id)); 
//     try {
//         await toggleFavoriteService(id);
//     } catch (err) {
//         dispatch(toggleFavoriteLocal(id)); 
//         toast.error('Failed to update favorite');
//     }
//   };

//   // Filter stories based on search
//   const filteredStories = stories.filter(story => {
//       if (!searchTerm) return true;
//       return story.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   // Group stories by Year
//   const groupedStories = useMemo(() => {
//     const groups = [];
//     filteredStories.forEach((story) => {
//         // Extract Year from date
//         const dateObj = new Date(story.date);
//         const year = dateObj.getFullYear().toString();

//         // Check if the last group is the same year
//         const lastGroup = groups[groups.length - 1];
//         if (lastGroup && lastGroup.year === year) {
//             lastGroup.stories.push(story);
//         } else {
//             groups.push({ year: year, stories: [story] });
//         }
//     });
//     return groups;
//   }, [filteredStories]);


//   if (loading && stories.length === 0) {
//       return <div className="flex justify-center items-center h-64"><i className="fas fa-spinner fa-spin text-4xl text-brand-500"></i></div>;
//   }

//   if (error) {
//       return <div className="text-center text-red-500 mt-10 p-4 border border-red-200 rounded-lg bg-red-50">{error}</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-[calc(100vh-4rem)]">
      
//       {/* On This Day Section (Only show if no search) */}
//       {!searchTerm && onThisDayItems.length > 0 && (
//         <div className="mb-12 animate-fade-in">
//           <div className="flex items-center mb-6">
//              <div className="bg-brand-100 p-2 rounded-full mr-3 shadow-sm">
//                 <i className="fas fa-history text-brand-600 text-lg"></i>
//              </div>
//              <div>
//                 <h2 className="text-xl font-bold text-gray-800">On This Day</h2>
//                 <p className="text-xs text-gray-500 font-medium">Memories from previous years</p>
//              </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {onThisDayItems.map(story => {
//                 const yearsAgo = new Date().getFullYear() - new Date(story.date).getFullYear();
//                 return (
//                    <Link key={story.id} to={`/story/${story.id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-brand-100 ring-1 ring-black/5">
//                       <div className="flex h-24 sm:h-28">
//                           <div className="w-1/3 relative overflow-hidden bg-gray-100">
//                              <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                           </div>
//                           <div className="w-2/3 p-3 flex flex-col justify-center">
//                              <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
//                                 {yearsAgo} Year{yearsAgo > 1 ? 's' : ''} Ago
//                              </p>
//                              <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 text-sm sm:text-base mb-1">{story.title}</h3>
//                              <p className="text-xs text-gray-400 font-medium">
//                                 {new Date(story.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
//                              </p>
//                           </div>
//                       </div>
//                    </Link>
//                 )
//             })}
//           </div>
//           <div className="h-px bg-gray-200 mt-10"></div>
//         </div>
//       )}

//       {/* Main Timeline Header */}
//       {!searchTerm && (
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Memory Vault</h1>
//           </div>
//       )}
      
//       {/* Search Result Header */}
//       {searchTerm && (
//           <div className="mb-6">
//              <h2 className="text-xl font-medium text-gray-600">
//                 Search results for "<span className="text-gray-900 font-bold">{searchTerm}</span>"
//              </h2>
//           </div>
//       )}

//       {/* Timeline View */}
//       {groupedStories.length > 0 ? (
//           <div className="space-y-12 pb-24">
//               {groupedStories.map((group) => (
//                   <div key={group.year} className="animate-fade-in">
//                       {/* Year Header */}
//                       <div className="flex items-center mb-6 sticky top-16 z-30 bg-brand-50/95 backdrop-blur-sm py-2 sm:bg-transparent sm:static sm:backdrop-blur-none transition-all">
//                             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{group.year}</h2>
//                             <div className="ml-6 h-1 flex-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
//                        </div>
                      
//                       <StoryList 
//                         stories={group.stories} 
//                         onToggleFavorite={handleToggleFavorite}
//                       />
//                   </div>
//               ))}
//           </div>
//       ) : (
//           <StoryList 
//             stories={[]} 
//             emptyMessage={searchTerm ? "No memories match your search." : "No memories found."}
//             showCreateLink={!searchTerm}
//           />
//       )}

//       {/* Floating Action Button (FAB) */}
//       <Link
//         to="/create"
//         className="fixed bottom-8 right-8 w-14 h-14 bg-brand-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-brand-700 hover:scale-105 transition-all duration-300 z-50 group"
//         title="Add New Memory"
//       >
//         <i className="fas fa-plus text-2xl group-hover:rotate-90 transition-transform duration-300"></i>
//       </Link>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useMemo } from 'react';
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

  // Filter stories based on search
  const filteredStories = stories.filter(story => {
      if (!searchTerm) return true;
      return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Group stories by Year
  const groupedStories = useMemo(() => {
    const groups = [];
    filteredStories.forEach((story) => {
        // Extract Year from date
        const dateObj = new Date(story.date);
        const year = dateObj.getFullYear().toString();

        // Check if the last group is the same year
        const lastGroup = groups[groups.length - 1];
        if (lastGroup && lastGroup.year === year) {
            lastGroup.stories.push(story);
        } else {
            groups.push({ year: year, stories: [story] });
        }
    });
    return groups;
  }, [filteredStories]);


  if (loading && stories.length === 0) {
      return <div className="flex justify-center items-center h-64"><i className="fas fa-spinner fa-spin text-4xl text-brand-500"></i></div>;
  }

  if (error) {
      return <div className="text-center text-red-500 mt-10 p-4 border border-red-200 rounded-lg bg-red-50">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-[calc(100vh-4rem)]">
      
      {/* On This Day Section (Only show if no search) */}
      {!searchTerm && onThisDayItems.length > 0 && (
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center mb-6">
             <div className="bg-brand-100 p-2 rounded-full mr-3 shadow-sm">
                <i className="fas fa-history text-brand-600 text-lg"></i>
             </div>
             <div>
                <h2 className="text-xl font-bold text-gray-800">On This Day</h2>
                <p className="text-xs text-gray-500 font-medium">Memories from previous years</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {onThisDayItems.map(story => {
                const yearsAgo = new Date().getFullYear() - new Date(story.date).getFullYear();
                return (
                   <Link key={story.id} to={`/story/${story.id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-brand-100 ring-1 ring-black/5">
                      <div className="flex h-24 sm:h-28">
                          <div className="w-1/3 relative overflow-hidden bg-gray-100">
                             <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="w-2/3 p-3 flex flex-col justify-center">
                             <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
                                {yearsAgo} Year{yearsAgo > 1 ? 's' : ''} Ago
                             </p>
                             <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 text-sm sm:text-base mb-1">{story.title}</h3>
                             <p className="text-xs text-gray-400 font-medium">
                                {new Date(story.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
                             </p>
                          </div>
                      </div>
                   </Link>
                )
            })}
          </div>
          <div className="h-px bg-gray-200 mt-10"></div>
        </div>
      )}

      {/* Main Timeline Header */}
      {!searchTerm && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Memory Vault</h1>
          </div>
      )}
      
      {/* Search Result Header */}
      {searchTerm && (
          <div className="mb-6">
             <h2 className="text-xl font-medium text-gray-600">
                Search results for "<span className="text-gray-900 font-bold">{searchTerm}</span>"
             </h2>
          </div>
      )}

      {/* Timeline View */}
      {groupedStories.length > 0 ? (
          <div className="space-y-12 pb-24">
              {groupedStories.map((group) => (
                  <div key={group.year} className="animate-fade-in relative">
                      
                      {/* Year Header - Centered with Original Style */}
                      <div className="flex justify-center py-4 mb-4">
                          <div className="bg-white/90 backdrop-blur-md border border-brand-100 shadow-sm px-6 py-2 rounded-xl flex items-center gap-3 border-l-4 border-l-brand-500">
                               <h2 className="text-xl font-bold text-gray-900">{group.year}</h2>
                               <div className="w-px h-4 bg-gray-300"></div>
                               <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
                                  {group.stories.length} {group.stories.length === 1 ? 'Memory' : 'Memories'}
                               </span>
                          </div>
                      </div>
                      
                      <StoryList 
                        stories={group.stories} 
                        onToggleFavorite={handleToggleFavorite}
                      />
                  </div>
              ))}
          </div>
      ) : (
          <StoryList 
            stories={[]} 
            emptyMessage={searchTerm ? "No memories match your search." : "No memories found."}
            showCreateLink={!searchTerm}
          />
      )}

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