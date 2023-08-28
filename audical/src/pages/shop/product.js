import React from 'react'

export const Product = (props) => {
    const { id, productName, price, beatImage, bpm, artist} = props.data;
  return <div className="product">
    <img src={beatImage}/>
    <div className="description">
        <p>${price}</p>
        <p>{bpm} BPM</p>
        <p><b>{productName}</b></p>
        <p>{artist}</p>
    </div>
    <button className="addToCartBtn"> Add To Cart </button>
    </div>
}
