//manages all everything related tio the pizza sold'

const initialState = {
    pizzas:[]
}

export const getAllPizzasTReducer = (state = initialState, action ) => {



    switch (action.type) {

        case 'GET_PIZZA_REQUEST': return {
            loading:true,
            ...state

        }

        case 'GET_PIZZA_SUCCESS':return {
            loading:false,
            pizzas:action.payload

        }
        case 'GET_PIZZA_FAILED':return {

            error:action.payload,
            loading:false,

        }

        default :return state;


    }

}