import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import {
  FaHome,
  FaBoxOpen,
  FaPlusCircle,
  FaUtensils,
  FaHandshake,
  FaTachometerAlt,
  FaUser, FaMoneyCheckAlt, FaHistory, FaBullhorn
} from 'react-icons/fa';

import Role from '../component/hooks/Role';
import Loading from '../component/Loading/Loading';

const DashboardLayout = () => {
  const { role, isLoading } = Role();

  // ✅ FIXED: return loading component
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

          {/* Member Profile  */}

          {role?.role === 'member' && (<>
            <li className="mt-4 font-bold text-sm text-gray-500 uppercase">User Panel</li>

            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }
              >
                <FaUser /> My Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/member/payment"
                className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }
              >
                <FaMoneyCheckAlt /> Make Payment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/member/history"
                className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }
              >
                <FaHistory /> Payment History
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/announcement"
                className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }
              >
                <FaBullhorn /> Announcements
              </NavLink>
            </li>



          </>)}

          {/* User Profile */}

          {role?.role === 'user' && (
            <>
              <li className="mt-4 font-bold text-sm text-gray-500 uppercase">User Panel</li>

              <li>
                <NavLink to="/dashboard" end className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>

                  <FaUser /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcement" className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>

                  <FaBullhorn /> Announcement
                </NavLink>
              </li>
            </>)}

          {/* ✅ Admin Routes */}
          {role?.role === 'admin' && (
            <>
              <li className="mt-4 font-bold text-sm text-gray-500 uppercase">Admin Panel</li>

              <li>
                <NavLink to="/dashboard" end className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>
                  <FaTachometerAlt className="inline-block mr-2" />
                  Admin Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageMembers" className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>
                  <FaBoxOpen className="inline-block mr-2" />
                  Manage Members
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/makeAnnouncement" className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>
                  <FaPlusCircle className="inline-block mr-2" />
                  Make Announcement
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/agreementRequests" className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>
                  <FaHandshake className="inline-block mr-2" />
                  Agreement Requests
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageCoupons" className={({ isActive }) =>
                  isActive
                    ? ' underline font-semibold'
                    : ''
                }>
                  <FaBoxOpen className="inline-block mr-2" />
                  Manage Coupons
                </NavLink>
              </li>
            </>
          )}

          {/* Common Routes */}



        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
