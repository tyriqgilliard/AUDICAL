import React from 'react'
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./AllProducts.css";



const AllProducts = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Tyriq's Shop</h1>
      </div>
      <div className="products"> {PRODUCTS.map((product) => (
      <Product data={product}/>
      ))}
        
      </div>  
    </div>
  )
}

export default AllProducts