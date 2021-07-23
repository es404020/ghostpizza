
import axios from 'axios';

const baseUrl = '';
let headers = {
    'Content-Type': 'application/json',

};



if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem('persist:root'))?.LoginReducers;

    if (value) {

        const { accesstoken } = JSON.parse(value);

        if (accesstoken) {


            axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`


        }


    }

}


const axiosInstance = axios.create({
    baseUrl: baseUrl,

});



axiosInstance.interceptors.response.use(


    (response) => new Promise((resolve, reject) => {

        console.log(response);
        resolve(response)
    }),
    (error) => {

        if (!error.response) {

            return new Promise((resolve, reject) => {
                reject(error)
            });
        }

        if (error.response.status === 403) {
            localStorage.removeItem("token");
            window.location = "/auth/login"

        } else {

            return new Promise((resolve, reject) => {
                reject(error)
            });
        }
    }




)



export default axiosInstance;