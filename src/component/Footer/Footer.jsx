
import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content pt-12 pb-6 mt-16 rounded-t-[80px] shadow-inner">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            <span className='text-primary'>
              Manage<span className="text-warning">Flat</span>
            </span>
          </h2>
          <p className="text-gray-500 mb-4">Your Smart Building Management Companion</p>
          <Link to="/contact">
            <button className="btn btn-primary px-6 rounded-full text-white font-semibold">Get in Touch</button>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2">Pages</h4>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/apartment">Apartments</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="space-y-1">
              <li><Link to="/dashboard/member/payment">Rent Payment</Link></li>
              <li><Link to="/dashboard/member/history">Payment History</Link></li>
              <li><Link to="/dashboard/announcement">Announcements</Link></li>
              <li><Link to="/dashboard/coupons">Coupons</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2 text-2xl">
              <NavLink to="https://facebook.com" target="_blank" className="hover:text-blue-600">
                <FaFacebook />
              </NavLink>
              <NavLink to="https://x.com" target="_blank" className="hover:text-blue-500">
                <FaSquareXTwitter />
              </NavLink>
              <NavLink to="https://linkedin.com" target="_blank" className="hover:text-blue-700">
                <FaLinkedin />
              </NavLink>
              <NavLink to="https://youtube.com" target="_blank" className="hover:text-red-600">
                <FaYoutube />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-content/20 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ManageFlat. All rights reserved by Asibur Rahman.</p>
          <div className="space-x-4">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms</Link>
            <Link to="/" className="hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
