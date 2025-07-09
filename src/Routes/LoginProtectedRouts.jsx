import React, { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';
import Loading from '../component/Loading/Loading';

const LoginProtectedRouts = ({children}) => {
    const{user, loading} = use(AuthContext)
       
        const location = useLocation()
         const navigate = useNavigate()
        useEffect(()=>{
                
                // console.log(location);
                if (location.pathname) {
                    document.title = location.pathname || "Default Title";
                }
                
            },[location])
        // console.log(location);
        // console.log(loading);
    
        
        
        if (loading && user) {
            return <>
            <Loading></Loading>
            </>
        }
        if (user && location.pathname=='/register') {
            return   navigate(location?.state || '/') 
        }

        if (user && location.pathname=='/login') {
            return  navigate(location?.state || '/') 
         }

         
    
        return (
            <div>
                
                {children}
            </div>
        );
};

export default LoginProtectedRouts;