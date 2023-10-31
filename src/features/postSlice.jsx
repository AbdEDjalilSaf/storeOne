import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
 name: "cart",
  initialState: {  
  cartItems: [
    {id:"one",title:"there's begin",desc:"more spesifice program",amount:1},
    {id:"two",title:"there's be end",desc:"more succesful projects",amount:1}
  ],
  amount: 1,
  total: 0,
  isLoading: true,
 },
reducers:{

  clearCart: (state)=>{
    state.cartItems = [];
  }
},
});

const Action_To_Item = "ACTION_To_Item";
const actionItem = (payload)=>{
 return {
  type:Action_To_Item,
  payload:payload
 }
}

export const {clearCart} = counterSlice.actions;
export default counterSlice.reducer;
