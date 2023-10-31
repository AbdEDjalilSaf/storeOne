import React from "react";

function cartItem({title,desc}){

return (
<div className="app">
<div className="flex justify-around">
<h2>{title}</h2>
<h3>{desc}</h3>
<button>remove</button>
</div>    
</div>


)

}
export default cartItem




































