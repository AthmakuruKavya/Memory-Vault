import axiosInstance from './axiosInstance';

export const updateProfileService = async (profileData) => {
  const formData = new FormData();
  
  if (profileData.username) formData.append('username', profileData.username);
  if (profileData.aboutMe !== undefined) formData.append('aboutMe', profileData.aboutMe);
  if (profileData.hobbies !== undefined) formData.append('hobbies', profileData.hobbies);
  if (profileData.favoriteThings !== undefined) formData.append('favoriteThings', profileData.favoriteThings);
  
  // If there is a file object, append it
  if (profileData.profilePictureFile) {
    formData.append('profilePicture', profileData.profilePictureFile);
  }

  const { data } = await axiosInstance.put('/users/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};