import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const location = useLocation();
    
    
    useEffect(()=>{
        
        // console.log(location);
        if (location.pathname) {
            document.title = location.pathname || "Default Title";
        }
        
    },[location])
    
    

    return (
        <>
        {/* <ToastContainer /> */}
        <Navbar> </Navbar>
         <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Root;