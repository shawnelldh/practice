import React { useContext }  from 'react';
import {CartContext} from "./CartContext";

export const Cart = () => {
   const [cart, setCart] = useContext(CartContext);
      return (
      <div>
        <span>Items in cart : {cart.length}</span>
        <br />
        <span>Total price 0 </span>
    </div>
   )

}