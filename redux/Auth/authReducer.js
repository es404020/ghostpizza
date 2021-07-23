//manages all everything related tio the pizza sold'

const initialState = {
   
}

export const LoginReducers = (state = initialState, action ) => {



    switch (action.type) {

        case 'LOGIN_REQUEST': return {
            loading:true,
           
           

        }

        case 'LOGIN_SUCCESS':return {
            loading:false,
            sucess:true,
            accesstoken:action.payload.accesstoken,
            user:action.payload.user,
        }
        case 'LOGIN_FAILED':return {

            error:action.payload,
            loading:false,

        }

        default :return state;


    }

}