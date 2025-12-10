import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./bottles.css"
import { getCartFromLocalStorage, removeFromLocalStorage, setCartToLocalStorage } from '../../Utilities/LocalStorage';
import Cart from '../../Cart/Cart';


const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);

    const [cart,setCart]=useState([]);


    const handleRemove=(id)=>{
        console.log("Btn clicked",id);
        const remainingCart=cart.filter(bottle=> bottle.id!==id);
        setCart(remainingCart);
        removeFromLocalStorage(id);
    }


    useEffect(()=>{
      const getcart=getCartFromLocalStorage();
    //   console.log(getcart);
      const storedCart=[];
      for(const id of getcart)
        {
            const getBottles=bottles.find(bottle=>bottle.id===id);
            if(getBottles)
            {
                storedCart.push(getBottles);
            }
        }  
    //   console.log(storedCart);
    setCart(storedCart);
    },[bottles])
     
    
    const handleAddToCart=(bottle)=>{
    //    console.log("Btn clicked",bottle);
    setCartToLocalStorage(bottle.id);
    const newCart=[...cart,bottle];
    setCart(newCart);
    }

    // console.log(bottles);
    return (
        <div>
            <h3>Bottles:{bottles.length}</h3>
            <h3>Bottles added to the cart:{cart.length}</h3>
            <Cart cart={cart} handleRemove={handleRemove}></Cart>
           <div className='bottles-container'>
             {
                bottles.map(bottle=><Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;