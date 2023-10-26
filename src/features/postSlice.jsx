import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
 name: "counter",
initialState: {  
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
 },
reducers:{},
});

export default counterSlice.reducer;
