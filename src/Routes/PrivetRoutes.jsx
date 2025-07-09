import React, { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../component/Loading/Loading';


const PrivetRoutes = ({children}) => {
    const{user, loading} = use(AuthContext)
    const location = useLocation()

    useEffect(()=>{
            
            // console.log(location);
            if (location.pathname) {
                document.title = location.pathname || "Default Title";
            }
            
        },[location])
    // console.log(location);
    // console.log(loading);

    
    
    if (loading) {
        return <>
        <Loading></Loading>
        </>
    }

    

     

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    //   if (user && location.pathname=='/register') {
    //         return   navigate(location?.state || '/') 
    //     }

    //     if (user && location.pathname=='/login') {
    //         return  navigate(location?.state || '/') 
    //      }
   

    // console.log(location.pathname);
    

    return (
        <div>
            
            {children}
        </div>
    );
};

export default PrivetRoutes;