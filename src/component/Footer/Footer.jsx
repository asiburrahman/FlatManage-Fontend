
import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        //                 <footer className="dark:bg-gray-100 dark:text-gray-900 mt-20">
        //             <div className=" flex flex-col   px-4 py-8 lg:flex-row dark:divide-gray-600 w-11/12 mx-auto">
        //                 <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
        //                     <li>Shop</li>
        //                     <li>About</li>
        //                     <li>Blog</li>
        //                     <li>Pricing</li>
        //                     <li>Contact</li>
        //                 </ul>
        //                 <div className="flex flex-col justify-center pt-6 lg:pt-0">


        // <div className='flex gap-10 justify-center items-center'>
        //                 <NavLink target="_blank" to='https://www.facebook.com/'><FaFacebook size={40} /></NavLink>
        //                 <NavLink target="_blank" to='https://x.com/'><FaSquareXTwitter size={40} /></NavLink>
        //                 <NavLink target="_blank" to='https://bd.linkedin.com/'><FaLinkedin  size={40} /></NavLink>
        //                 <NavLink target="_blank" to='https://www.youtube.com/'><FaYoutube  size={40} /></NavLink>
        //                 </div>
        //                 </div>
        //             </div>

        //             <section className='pb-4'>

        //             <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        //         <p className="text-sm text-gray-400">
        //           &copy; {new Date().getFullYear()} FreelanceNation. All rights reserved By Asibur Rahman.
        //         </p>
        //         <div className="flex space-x-4 mt-4 md:mt-0">
        //           <a href="#" className="text-gray-400 hover:text-white text-sm">
        //             Privacy Policy
        //           </a>
        //           <a href="#" className="text-gray-400 hover:text-white text-sm">
        //             Terms of Service
        //           </a>
        //           <a href="#" className="text-gray-400 hover:text-white text-sm">
        //             Contact
        //           </a>
        //         </div>
        //       </div>
        //             </section>


        //         </footer>   


        <footer className="bg-base-300 text-base-content text-center px-4 py-10 md:px-10 md:py-16 rounded-t-[500px]">
            <h2 className="text-md md:text-4xl font-bold mb-6">Manage<span className=' text-accent'>Flat</span></h2>
            <button className="btn btn-primary font-bold rounded-full px-8 py-2 mb-8">
                Get in touch
            </button>
            <div className="border-t border-base-content/30 md:w-2xl mx-auto mb-6"></div>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <Link to='/'>Home</Link>
                <Link to='/availableFood'>Available Food</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
      

            <div className='py-4 flex gap-10 justify-center items-center'>
                <NavLink target="_blank" to='https://www.facebook.com/'><FaFacebook size={40} /></NavLink>
                <NavLink target="_blank" to='https://x.com/'><FaSquareXTwitter size={40} /></NavLink>
                <NavLink target="_blank" to='https://bd.linkedin.com/'><FaLinkedin size={40} /></NavLink>
                <NavLink target="_blank" to='https://www.youtube.com/'><FaYoutube size={40} /></NavLink>
            </div>



            <section className='pb-4'>

                <div className="container mx-auto gap-2 pt-4 flex flex-col items-center justify-between">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} FoodNeighbor. All rights reserved By Asibur Rahman.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </footer>

    );
};

export default Footer;