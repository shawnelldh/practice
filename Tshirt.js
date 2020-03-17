import React from "react";
import {CartContext} from './CartContext';

export const Tshirt = (props) => {
  const addToCart = () => {
     console.log("clicked...");
  }
  return(
  <div>
   <h2> {props.name}</h2>
   <br />
   <h4> {props.price}</h4>
   <br />
   <button onClick= {addToCart}>Add to cart</button>
   <hr />
  </div>
  )
}