import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import {
  FaHome,
  FaBoxOpen,
  FaPlusCircle,
  FaUtensils,
  FaHandshake,
  FaTachometerAlt,
} from 'react-icons/fa';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden font-bold text-xl">
            Dashboard
          </div>
        </div>

        {/* Main Content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-2">
          {/* Logo */}
          <li className="mb-4">
            <div className="flex items-center justify-center gap-2">
              <img className="w-10 h-10 rounded-full" src="/Food.jpg" alt="Logo" />
              <Link to="/" className="text-sm font-bold md:text-2xl lg:text-3xl">
                Food<span className="text-accent">Neighbor</span>
              </Link>
            </div>
          </li>

          {/* Links */}
          <li>
            <NavLink to="/dashboard" className={({ isActive }) =>
              isActive
                ? 'text-blue-600 underline font-semibold'
                : 'text-gray-600 hover:text-blue-600'
            }>
              <FaHome className="inline-block mr-2" />
              My Profile
            </NavLink>
          </li>



          <li>
            <NavLink to="apartment" className={({ isActive }) =>
              isActive
                ? 'text-blue-600 underline font-semibold'
                : 'text-gray-600 hover:text-blue-600'
            }>
              <FaBoxOpen className="inline-block mr-2" />
              Available Food
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/addFood" className={({ isActive }) =>
              isActive
                ? 'text-blue-600 underline font-semibold'
                : 'text-gray-600 hover:text-blue-600'
            }>
              <FaPlusCircle className="inline-block mr-2" />
              Add Food
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/myPostedFood" className={({ isActive }) =>
              isActive
                ? 'text-blue-600 underline font-semibold'
                : 'text-gray-600 hover:text-blue-600'
            }>
              <FaUtensils className="inline-block mr-2" />
              My Added Food
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/myRequestedFood">
              <FaHandshake className="inline-block mr-2" />
              My Requested Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
