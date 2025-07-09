import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_base_url
})
const UseAxiosToken = () => {
         const { user, singOutUser } = useContext(AuthContext);

    useEffect(() => {
        // Request interceptor
        const requestInterceptor = axiosInstance.interceptors.request.use(config => {
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });

        // Response interceptor
        const responseInterceptor = axiosInstance.interceptors.response.use(
            response => response,
            error => {
                console.log('Error in interceptor', error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    singOutUser()
                        .then(() => console.log('Signed out user for 401/403 status code'))
                        .catch(err => console.log(err));
                }
                return Promise.reject(error);
            }
        );

        // Cleanup to remove interceptors when component unmounts
        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [user, singOutUser]);

    return axiosInstance;
};

export default UseAxiosToken;