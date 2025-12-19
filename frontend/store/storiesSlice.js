import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  searchTerm: '',
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    fetchStoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStoriesSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchStoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addStory: (state, action) => {
      state.items.unshift(action.payload); // Add new story to top
    },
    updateStory: (state, action) => {
      const index = state.items.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteStory: (state, action) => {
      state.items = state.items.filter(s => s.id !== action.payload);
    },
    toggleFavoriteLocal: (state, action) => {
        const story = state.items.find(s => s.id === action.payload);
        if (story) {
            story.isFavorite = !story.isFavorite;
        }
    },
    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    }
  },
});

export const { 
    fetchStoriesStart, 
    fetchStoriesSuccess, 
    fetchStoriesFailure, 
    addStory, 
    updateStory, 
    deleteStory,
    toggleFavoriteLocal,
    setSearchTerm
} = storiesSlice.actions;
export default storiesSlice.reducer;