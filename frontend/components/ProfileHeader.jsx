import React from 'react';

const ProfileHeader = ({ user, onEdit }) => {
  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user.username}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-brand-600 text-white rounded-md text-sm font-medium hover:bg-brand-700 transition-colors"
        >
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">About Me</h4>
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">
            {user.aboutMe || <span className="text-gray-400 italic">No description added yet.</span>}
          </p>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Hobbies</h4>
            <p className="text-gray-800 whitespace-pre-line">{user.hobbies || '-'}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Favorites</h4>
            <p className="text-gray-800 whitespace-pre-line">{user.favoriteThings || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;