import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemove}) => {
    // console.log(cart);
    return (
        <div className='cart'>
           {
            cart.map((bottle,index)=> 
            <div key={index}>
                
                <img src={bottle.img} alt="" />
                <button onClick={()=>handleRemove(bottle.id)}>X</button>
            </div>)
           } 
        </div>
    );
};

export default Cart;