import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./bottles.css"


const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);

    const [cart,setCart]=useState([]);
    
    const handleAddToCart=(bottle)=>{
    //    console.log("Btn clicked",bottle);
    const newCart=[...cart,bottle];
    setCart(newCart);
    }

    // console.log(bottles);
    return (
        <div>
            <h3>Bottles:{bottles.length}</h3>
            <h3>Bottles added to the cart:{cart.length}</h3>
           <div className='bottles-container'>
             {
                bottles.map(bottle=><Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;