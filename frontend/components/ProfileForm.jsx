import React, { useState } from 'react';
import Input from './Input.jsx';

const ProfileForm = ({ user, onSave, onCancel, isLoading }) => {
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(user.profilePicture || "https://picsum.photos/150");

  const [formData, setFormData] = useState({
    username: user.username || '',
    aboutMe: user.aboutMe || '',
    hobbies: user.hobbies || '',
    favoriteThings: user.favoriteThings || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
        ...formData,
        profilePictureFile: profilePicFile
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      
      {/* Profile Picture Upload */}
      <div className="flex flex-col items-center justify-center -mt-20 mb-6">
        <div className="relative group">
            <img 
                src={previewUrl} 
                alt="Profile Preview" 
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md bg-white"
            />
            <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white">
                <i className="fas fa-camera text-2xl"></i>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
        </div>
        <p className="text-xs text-gray-500 mt-2">Click to change profile photo</p>
      </div>

      <Input 
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 mb-1">Email (Read Only)</label>
        <input 
          type="email" 
          value={user.email} 
          disabled 
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
        />
      </div>

      <Input 
        label="About Me"
        name="aboutMe"
        value={formData.aboutMe}
        onChange={handleChange}
        textarea
      />
      <Input 
        label="Hobbies (One per line)"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
        textarea
      />
      <Input 
        label="Favorite things to do (One per line)"
        name="favoriteThings"
        value={formData.favoriteThings}
        onChange={handleChange}
        textarea
      />

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
        <button 
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={isLoading}
          className="px-6 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;