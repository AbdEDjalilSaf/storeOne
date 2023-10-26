import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/PostSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other slices here if needed.
  },
});

export default store;
