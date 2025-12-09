import React from 'react';
import "./bottle.css";

const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle);
    const {img,name,price,stock}=bottle;
    return (
        <div className='bottle-card bottle'>
            <p>Name:{name}</p>
            <img src={img} alt="" />
            <p>Price:{price}</p>
            <p>{stock} remaining</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;