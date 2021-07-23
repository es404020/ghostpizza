//manages all everything related tio the pizza sold'

const initialState = {
   
}

export const RegisterReducers = (state = initialState, action ) => {



    switch (action.type) {

        case 'REGISTRATION_REQUEST': return {
            loading:true,
           

        }

        case 'REGISTRATION_SUCCESS':return {
            loading:false,
            sucess:true,
            message:action.payload
      
        }
        case 'REGISTRATION_FAILED':return {

            error:action.payload,
            loading:false,

        }

        default :return state;


    }

}