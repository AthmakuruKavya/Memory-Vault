import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.js';
import { updateUserSuccess } from '../store/authSlice.js';
import ProfileHeader from '../components/ProfileHeader.jsx';
import ProfileForm from '../components/ProfileForm.jsx';
import { updateProfileService } from '../services/user.service.js';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (formData) => {
    if (!user) return;
    setIsLoading(true);

    try {
      const updatedUser = await updateProfileService(formData);
      dispatch(updateUserSuccess(updatedUser));
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-brand-200"></div>
        
        <div className="relative px-6 pb-6">
          {/* Avatar Section */}
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
             <div className="relative group">
                <img 
                    src={user.profilePicture || "https://picsum.photos/150"} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md bg-white"
                />
             </div>
          </div>

          {isEditing ? (
            <ProfileForm 
                user={user} 
                onSave={handleSave} 
                onCancel={() => setIsEditing(false)} 
                isLoading={isLoading} 
            />
          ) : (
            <ProfileHeader 
                user={user} 
                onEdit={() => setIsEditing(true)} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;