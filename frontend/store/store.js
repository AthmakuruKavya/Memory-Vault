import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import storiesReducer from './storiesSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stories: storiesReducer,
  },
});