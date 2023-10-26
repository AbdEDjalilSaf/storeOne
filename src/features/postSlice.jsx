import { createSlice } from "@reduxjs/toolkit";

let inialiState = [
    {id:"1",title:"learn Redux ",content:"I've hard good things"},
    {id:"2",title:"Slice...",content:"I more say slicein all project"}
]

let postSlice = createSlice({
name:"posts",
inialiState,
reducers:{}

})


export default postSlice.reducer











