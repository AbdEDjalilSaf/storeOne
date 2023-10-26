import { configureStore } from "@reduxjs/toolkit";
import { postsList } from "./features/PostSlice";
let store = configureStore({
reducer:{
   post:postsList,
   
},
})

export default store












