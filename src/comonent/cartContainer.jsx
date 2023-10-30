import React from "react"
import CartItem from './CartItem'
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


return(

    <section>
        <div>
{cartItems.map((item)=>{
return   <CartItem  key={item.id}  {...item}/>
})}

    </div>
    <footer className="px-20">
        <hr />
        <div>
            <h2>
                {total}
            </h2>
        </div>
    </footer>
    </section>
)







}

export default Cartcontainer