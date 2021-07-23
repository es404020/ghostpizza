
// import axios from 'axios';

import axiosInstance from '../../helper/axios'

export const getAllPizzas=()=>async dispath=>{


    dispath({type:'GET_PIZZA_REQUEST'})

    try{
        const response= await axiosInstance.get(`${process.env.NEXT_PUBLIC_URL}pizza`);
        // console.log(response.data.data[0]._id);
        let updatedValue =response.data.data.map((item)=>({...item,id:item._id}));
      
        dispath({type:'GET_PIZZA_SUCCESS',payload:updatedValue})

    }
    catch(error){

    
   
        dispath({type:'GET_PIZZA_FAILED',payload:error})

    }

}