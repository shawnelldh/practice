import React from "react";
import { Tshirt } from './Tshirt';

export const TshirtList = () => {
  
  
  const database = [
  {name: "red tshirt", price: 10.99, id:1 },
  {name: "blue jacket", price: 15.99, id:2 },
  {name: 'red shoes', price:  24.99, id:3 },
  
  ]
  
  return (
   <div>
   {
    database.map(item => (
      <Tshirt name={item.name} price={item.price}
        key={item.id} />
   ))
}

  </div>
  
  )
}