//cart reducers manager cart infromation 


export const cartReducer =(state={
    cartItem:[]
},action)=>{



    switch (action.type){

    

        case 'ADD_TO_CART':
            const alreadyExist= state.cartItem.find((item)=>item.name=== action.payload.name);
            if(alreadyExist){

                return{
                    ...state,
                    cartItem:state.cartItem.map((item)=>(item.name=== action.payload.name && action.payload.quantity>=1 )?action.payload:item)

                }

            }else{
                return {
                    ...state,
                    cartItem:[...state.cartItem,action.payload]
        
                }
            }
            case 'REMOVE_TO_CART':
                return {
                    ...state,
                    cartItem:state.cartItem.filter((item)=>item.name!= action.payload.name)
        
                }
        

        default :return state
    }

}