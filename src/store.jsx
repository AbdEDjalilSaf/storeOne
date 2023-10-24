import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import {postsReducer} from "./features/postSlice"

let store = configureStore({
reducer:{
   post:postsReducer
   
}
})













