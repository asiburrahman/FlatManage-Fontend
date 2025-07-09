import React from 'react';
import { Link, useLocation, useRouteError } from 'react-router';



const Error = () => {
     const error = useRouteError()
     const location = useLocation()
    //  console.log(location);
     
    return (
        
        <div className='h-full'>
           
            <div className='py-24 text-center h-dvh'>
        <h1 className='mb-8 text-7xl font-thin text-gray-900'>
          {error?.status || 404} 
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || `Wrong URl: ${location}`}
         
        </p>
        <Link to='/'>
          
          <button className="btn bg-[#176AE5] text-white rounded-4xl">Go Back To Home</button>
        </Link>
      </div>
     
        </div>
    );
};

export default Error;