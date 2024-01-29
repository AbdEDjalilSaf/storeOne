import React from "react";
import {removeItem} from '../features/PostSlice'
import { useDispatch } from "react-redux";

function cartItem({title,desc}){
const dispatch = useDispatch();
return (
<div className="app">
<div className="flex justify-around">
<h2>{title}</h2>
<h3>{desc}</h3>
<button onClick={()=>dispatch(removeItem())}>remove</button>
</div>    
</div>


)

}
export default cartItem




































