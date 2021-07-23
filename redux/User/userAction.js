
import axiosInstance from '../../helper/axios'

export const registerAction=(user)=>async dispath=>{

    dispath({type:'REGISTRATION_REQUEST'})

    try{
        const response= await axiosInstance.post(`${process.env.NEXT_PUBLIC_URL}auth/register`,user);
      
      
        dispath({type:'REGISTRATION_SUCCESS',payload:response.data})

    }
    catch(error){
   
        dispath({type:'REGISTRATION_FAILED',payload:error})

        setTimeout(()=>{
            dispath({type:'REGISTRATION_FAILED',payload:''})

        },800)


    }

}