import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/PostSlice';

const store = configureStore({
  reducer: {
    cart:counterReducer

  },
});

export default store;
