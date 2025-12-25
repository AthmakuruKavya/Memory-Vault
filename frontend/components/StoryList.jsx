// import React from 'react';
// import { Link } from 'react-router-dom';
// import StoryCard from './StoryCard.jsx';

// const StoryList = ({ stories, onToggleFavorite, emptyMessage, showCreateLink = false }) => {
//   if (!stories || stories.length === 0) {
//     return (
//       <div className="text-center py-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
//         <i className="fas fa-camera text-gray-300 text-5xl mb-4"></i>
//         <p className="text-gray-500 text-lg">{emptyMessage || "No memories found."}</p>
//         {showCreateLink && (
//             <Link to="/create" className="mt-4 inline-block text-brand-600 font-medium hover:underline">
//                 Create your first memory
//             </Link>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
//       {stories.map((story) => (
//         <StoryCard 
//             key={story.id} 
//             story={story} 
//             onToggleFavorite={onToggleFavorite}
//         />
//       ))}
//     </div>
//   );
// };

// export default StoryList;

import React from 'react';
import { Link } from 'react-router-dom';
import StoryCard from './StoryCard.jsx';

const StoryList = ({ stories, onToggleFavorite, emptyMessage, showCreateLink = false, className = "" }) => {
  if (!stories || stories.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <i className="fas fa-camera text-gray-300 text-5xl mb-4"></i>
        <p className="text-gray-500 text-lg">{emptyMessage || "No memories found."}</p>
        {showCreateLink && (
            <Link to="/create" className="mt-4 inline-block text-brand-600 font-medium hover:underline">
                Create your first memory
            </Link>
        )}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {stories.map((story) => (
        <StoryCard 
            key={story.id} 
            story={story} 
            onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default StoryList;