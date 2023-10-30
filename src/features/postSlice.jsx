import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
 name: "counter",
  initialState: {  
  cartItems: [
    {id:"one",title:"there's begin",desc:"more spesifice program"},
    {id:"two",title:"there's be end",desc:"more succesful projects"}
  ],
  amount: 1,
  total: 0,
  isLoading: true,
 },
reducers:{},
});

export default counterSlice.reducer;
