
import axiosInstance from '../../helper/axios'
import parseJwt from '../../utiliy/jwt'




export const login=(user)=>async dispath=>{

    dispath({type:'LOGIN_REQUEST'})

    try{
        const response= await axiosInstance.post(`${process.env.NEXT_PUBLIC_URL}auth/login`,user);

     
        dispath({type:'LOGIN_SUCCESS',payload:{accesstoken:response.data.access_token,user:parseJwt(response.data.access_token)}})

    }
    catch(error){

   
        dispath({type:'LOGIN_FAILED',payload:error})

        setTimeout(()=>{
            dispath({type:'LOGIN_FAILED',payload:''})

        },500)

    }

}