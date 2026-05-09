import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const location = useLocation();
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.pathname) {
            // Optional: better title logic
            const pageTitle = location.pathname === '/' ? 'Home' : location.pathname.split('/').filter(Boolean).pop();
            document.title = `ManageFlat | ${pageTitle ? pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1) : 'Home'}`;
        }
    }, [location]);
    
    

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