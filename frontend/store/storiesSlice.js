// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   items: [],
// //   onThisDayItems: [],
// //   loading: false,
// //   error: null,
// //   searchTerm: '',
// // };

// // const storiesSlice = createSlice({
// //   name: 'stories',
// //   initialState,
// //   reducers: {
// //     fetchStoriesStart: (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     },
// //     fetchStoriesSuccess: (state, action) => {
// //       state.loading = false;
// //       state.items = action.payload;
// //     },
// //     fetchStoriesFailure: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload;
// //     },
// //     setOnThisDayStories: (state, action) => {
// //         state.onThisDayItems = action.payload;
// //     },
// //     addStory: (state, action) => {
// //       state.items.unshift(action.payload); // Add new story to top
// //     },
// //     updateStory: (state, action) => {
// //       const index = state.items.findIndex(s => s.id === action.payload.id);
// //       if (index !== -1) {
// //         state.items[index] = action.payload;
// //       }
// //     },
// //     deleteStory: (state, action) => {
// //       state.items = state.items.filter(s => s.id !== action.payload);
// //     },
// //     toggleFavoriteLocal: (state, action) => {
// //         const story = state.items.find(s => s.id === action.payload);
// //         if (story) {
// //             story.isFavorite = !story.isFavorite;
// //         }
// //     },
// //     setSearchTerm: (state, action) => {
// //         state.searchTerm = action.payload;
// //     }
// //   },
// // });

// // export const { 
// //     fetchStoriesStart, 
// //     fetchStoriesSuccess, 
// //     fetchStoriesFailure,
// //     setOnThisDayStories, 
// //     addStory, 
// //     updateStory, 
// //     deleteStory,
// //     toggleFavoriteLocal,
// //     setSearchTerm
// // } = storiesSlice.actions;
// // export default storiesSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   onThisDayItems: [],
//   loading: false,
//   error: null,
//   searchTerm: '',
// };

// const storiesSlice = createSlice({
//   name: 'stories',
//   initialState,
//   reducers: {
//     fetchStoriesStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchStoriesSuccess: (state, action) => {
//       state.loading = false;
//       state.items = action.payload;
//     },
//     fetchStoriesFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     setOnThisDayStories: (state, action) => {
//         state.onThisDayItems = action.payload;
//     },
//     addStory: (state, action) => {
//       state.items.push(action.payload);
//       // Sort by date descending (Newest date first)
//       state.items.sort((a, b) => new Date(b.date) - new Date(a.date));
//     },
//     updateStory: (state, action) => {
//       const index = state.items.findIndex(s => s.id === action.payload.id);
//       if (index !== -1) {
//         state.items[index] = action.payload;
//         // Resort by date descending after update
//         state.items.sort((a, b) => new Date(b.date) - new Date(a.date));
//       }
//     },
//     deleteStory: (state, action) => {
//       state.items = state.items.filter(s => s.id !== action.payload);
//     },
//     toggleFavoriteLocal: (state, action) => {
//         const story = state.items.find(s => s.id === action.payload);
//         if (story) {
//             story.isFavorite = !story.isFavorite;
//         }
//     },
//     setSearchTerm: (state, action) => {
//         state.searchTerm = action.payload;
//     }
//   },
// });

// export const { 
//     fetchStoriesStart, 
//     fetchStoriesSuccess, 
//     fetchStoriesFailure,
//     setOnThisDayStories, 
//     addStory, 
//     updateStory, 
//     deleteStory,
//     toggleFavoriteLocal,
//     setSearchTerm
// } = storiesSlice.actions;
// export default storiesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  onThisDayItems: [],
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
    setOnThisDayStories: (state, action) => {
        state.onThisDayItems = action.payload;
    },
    addStory: (state, action) => {
      state.items.push(action.payload);
      // Sort by date descending, then createdAt descending
      state.items.sort((a, b) => {
        const dateDiff = new Date(b.date) - new Date(a.date);
        if (dateDiff !== 0) return dateDiff;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
    updateStory: (state, action) => {
      const index = state.items.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        // Resort by date descending, then createdAt descending
        state.items.sort((a, b) => {
            const dateDiff = new Date(b.date) - new Date(a.date);
            if (dateDiff !== 0) return dateDiff;
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
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
    setOnThisDayStories, 
    addStory, 
    updateStory, 
    deleteStory,
    toggleFavoriteLocal,
    setSearchTerm
} = storiesSlice.actions;
export default storiesSlice.reducer;