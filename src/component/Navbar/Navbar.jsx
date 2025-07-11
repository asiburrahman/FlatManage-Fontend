import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Theme from '../ChangeTheme/Theme';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, singOutUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    singOutUser()
      .then(() => {
        navigate('/');
        toast.success('User signed out successfully!');
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      {[
        { to: '/', label: 'Home' },
        { to: '/apartment', label: 'Apartment' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
      ].map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? ' underline font-semibold transition'
                : ' hover: font-medium transition'
            }
          >
            {label}
          </NavLink>
        </li>
      ))}

      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? ' underline font-semibold transition'
                : ' hover: font-medium transition'
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-200 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        {/* Left - Logo */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl lg:text-2xl">
            <img src="/logo.png" alt="logo" className="w-8 h-8 rounded-full hidden md:inline-block" />
            <span className='text-primary'>
              Manage<span className="text-warning">Flat</span>
            </span>
          </Link>
        </div>

        {/* Center - Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{navLinks}</ul>
        </div>

        {/* Right - User & Theme */}
        <div className="navbar-end gap-2">
          {!user && (
            <>
              <Link to="/login" className="btn btn-sm btn-outline btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-primary text-white">
                Sign Up
              </Link>
            </>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || '/default-avatar.png'} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-48"
              >
                <li className="font-semibold">
                  <Link>
                    <FaUserCircle className="mr-1" />
                    {user?.displayName || 'Anonymous'}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>
                    <FaSignOutAlt className="mr-1" /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}

          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
