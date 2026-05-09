import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Theme from '../ChangeTheme/Theme';
import { FaTachometerAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import Button from '../UI/Button/Button';

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
            <img src="/logo1.png" alt="logo" className="w-15 h-10 rounded-xl hidden md:inline-block" />
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
        <div className="navbar-end gap-3">
          {!user && (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">Sign Up</Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-base-300">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || '/default-avatar.png'} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow-xl bg-base-100 rounded-2xl w-52 border border-base-300"
              >
                <li className="font-semibold text-primary px-2 py-1">
                  <div className="flex items-center gap-2">
                    <FaUserCircle />
                    <span>{user?.displayName || 'Anonymous'}</span>
                  </div>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li>
                  <Link to="/dashboard" className="py-2">
                    <FaTachometerAlt />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="py-2 text-error">
                    <FaSignOutAlt /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div className="ml-1">
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
