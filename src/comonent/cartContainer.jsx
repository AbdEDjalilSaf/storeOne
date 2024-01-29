import React from "react"
import CartItem from './CartItem'
import { useSelector,useDispatch } from "react-redux"
import {clearCart} from "../features/PostSlice"

function Cartcontainer(){
const dispatch = useDispatch();
const {amount,total,cartItems} = useSelector((store)=> store.cart);


if(amount < 1){
    return (
    <>
    <h2>You have Bug</h2>
    <p>You need solute </p>
    </>
    )
}


return(

    <section>
        <div>

{cartItems.map((item)=>{
    return <CartItem key={item.id}  {...item}  />
        
    {/* <section className="flex justify-between">
        <h2>{item.title}</h2>
        <h2>{item.desc}</h2>
         <h2>{item.id}</h2>
</section> */}
    
})}
    </div>
    <footer className="px-20">
        <hr />
        <div>
            <h2>
                {total}
            </h2>
            <button onClick={()=>dispatch(clearCart())}>CLEAR CART</button>
        </div>
    </footer>
    </section>
)






}

export default Cartcontainer