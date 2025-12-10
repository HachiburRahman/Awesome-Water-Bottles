const getCartFromLocalStorage=()=>{
    const storedCart=localStorage.getItem("cart");
    if(storedCart){
        const localCart=JSON.parse(storedCart);
        return localCart;
    }
    else
    {
        return [];
    }
}

const saveToLocalStorage=(newCart)=>{
   const stringifiedCart=JSON.stringify(newCart);

    localStorage.setItem("cart",stringifiedCart);
}


const setCartToLocalStorage=(id)=>{
      console.log(id);
    const cart=getCartFromLocalStorage();
    const newCart=[...cart,id];
    saveToLocalStorage(newCart);

    
}


const removeFromLocalStorage=(id)=>{
    const storedCart= getCartFromLocalStorage();
    const remainingCart=storedCart.filter(storeId=>storeId !==id)
    saveToLocalStorage(remainingCart)
}


export {getCartFromLocalStorage,setCartToLocalStorage,removeFromLocalStorage};