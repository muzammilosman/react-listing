import axios from "axios";

export const SetupInterceptors = (navigate) => {
    axios.interceptors.response.use(
       (response) => {
           return response;
       },
       (error) => {
           console.log(error)
           if (error.response) {
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login');
                }
           }
           return Promise.reject(error);
      }
   );

   axios.interceptors.request.use((config) => {
       const access_token = localStorage.getItem('access_token');
       if(access_token){
        config.headers.Authorization = 'Bearer ' + access_token;
       }
       return config;
   })
};