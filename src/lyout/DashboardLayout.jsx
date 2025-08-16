import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import {
  FaHome,
  FaBoxOpen,
  FaPlusCircle,
  FaUtensils,
  FaHandshake,
  FaTachometerAlt,
  FaUser,
  FaMoneyCheckAlt,
  FaHistory,
  FaBullhorn,
  FaSignOutAlt
} from 'react-icons/fa';

import useAuth from '../component/hooks/UseAuth';
import Role from '../component/hooks/Role';
import Loading from '../component/Loading/Loading';
 // ✅ Import useAuth

const DashboardLayout = () => {
  const { role, isLoading } = Role();
  const { singOutUser } = useAuth(); // ✅ use logOut from auth

  const handleLogout = async () => {
    try {
      await singOutUser();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (isLoading) return <Loading />;

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
              <img className="w-10 h-10 rounded-full" src="/logo.png" alt="Logo" />
              <Link to="/" className="text-sm font-bold md:text-2xl lg:text-3xl">
                <span className='text-primary'>
                  Manage<span className="text-warning">Flat</span>
                </span>
              </Link>
            </div>
          </li>

          {/* Member Panel */}
          {role?.role === 'member' && (
            <>
              <li className="mt-4 font-bold text-sm uppercase">Member Panel</li>
              <li>
                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaUser /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/member/payment" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaMoneyCheckAlt /> Make Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/member/history" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaHistory /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcement" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaBullhorn /> Announcements
                </NavLink>
              </li>
            </>
          )}

          {/* User Panel */}
          {role?.role === 'user' && (
            <>
              <li className="mt-4 font-bold text-sm uppercase">User Panel</li>
              <li>
                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaUser /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcement" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaBullhorn /> Announcement
                </NavLink>
              </li>
            </>
          )}

          {/* Admin Panel */}
          {role?.role === 'admin' && (
            <>
              <li className="mt-4 font-bold text-sm uppercase">Admin Panel</li>
              <li>
                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaTachometerAlt /> Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMembers" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaBoxOpen /> Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaPlusCircle /> Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/agreementRequests" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaHandshake /> Agreement Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupons" className={({ isActive }) => isActive ? 'underline font-semibold' : ''}>
                  <FaBoxOpen /> Manage Coupons
                </NavLink>
              </li>
            </>
          )}

          {/* Logout Button (All Roles) */}
          <li className="mt-6">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-left hover:underline font-semibold"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
