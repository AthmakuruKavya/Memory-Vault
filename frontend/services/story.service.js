import axiosInstance from './axiosInstance';

export const getAllStoriesService = async () => {
  const { data } = await axiosInstance.get('/stories');
  return data;
};

export const getFavoriteStoriesService = async () => {
  const { data } = await axiosInstance.get('/stories/favorites');
  return data;
};

export const getOnThisDayStoriesService = async () => {
  const { data } = await axiosInstance.get('/stories/on-this-day');
  return data;
};

export const getStoryByIdService = async (id) => {
  const { data } = await axiosInstance.get(`/stories/${id}`);
  return data;
};

export const createStoryService = async (storyData) => {
  // Use FormData for file upload
  const formData = new FormData();
  formData.append('title', storyData.title);
  formData.append('date', storyData.date);
  if (storyData.description) formData.append('description', storyData.description);
  if (storyData.location) formData.append('location', storyData.location);
  if (storyData.imageFile) {
    formData.append('image', storyData.imageFile);
  }

  const { data } = await axiosInstance.post('/stories', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};

export const updateStoryService = async (id, storyData) => {
  const formData = new FormData();
  if (storyData.title) formData.append('title', storyData.title);
  if (storyData.date) formData.append('date', storyData.date);
  if (storyData.description !== undefined) formData.append('description', storyData.description);
  if (storyData.location !== undefined) formData.append('location', storyData.location);
  if (storyData.isFavorite !== undefined) formData.append('isFavorite', storyData.isFavorite);
  
  // Only append image if a new file exists
  if (storyData.imageFile) {
    formData.append('image', storyData.imageFile);
  }

  const { data } = await axiosInstance.put(`/stories/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};

export const deleteStoryService = async (id) => {
  const { data } = await axiosInstance.delete(`/stories/${id}`);
  return data;
};

export const toggleFavoriteService = async (id) => {
  const { data } = await axiosInstance.put(`/stories/${id}/favorite`);
  return data;
};