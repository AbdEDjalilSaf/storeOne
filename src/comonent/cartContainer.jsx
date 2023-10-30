import React from "react"
import cartItem from './cartItem'
import { useSelector } from "react-redux"

function Cartcontainer(){

const {amount,total,cartItems} = useSelector((store)=> store.cart);


if(amount < 1){
    return (
    <>
    <h2>You have Bug</h2>
    <p>You need solute </p>
    </>
    )
}
<header>
<h2>Title</h2>
</header>
{cartItem.map((item)=>{
    return <cartItem key={item.id} {...item} />

})
}






}

export default Cartcontainer