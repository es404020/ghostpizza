

export const addToCart=(pizza,quantity,varient)=>(dispath,getState)=>{




    var cartItem = {
        name:pizza.name,
        id:pizza.id,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity
    }
    dispath({type:'ADD_TO_CART',payload:cartItem});


    // if(typeof window !== 'undefined'){
    //     localStorage.setItem('cartItem',JSON.stringify(cartItems))

    // }
 


}



export const RemoveForCart=(pizza)=>(dispath,getState)=>{

    dispath({type:'REMOVE_TO_CART',payload:pizza});

}