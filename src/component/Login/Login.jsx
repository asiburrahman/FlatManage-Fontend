import React, { use, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { singInUser, setUser, googleSignin } = use(AuthContext);
  const [showErr, setShowErr] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setShowErr('');

    singInUser(email, password)
      .then(() => {
        toast.success('User signed in successfully!');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch((error) => {
        const msg = error.message || 'Login failed.';
        setShowErr(msg);
        toast.error(msg);
      });
  };

  const handleGoogleSignin = () => {
    setShowErr('');
    googleSignin()
      .then((result) => {
        setUser(result.user);
        toast.success('Logged in with Google!');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch((error) => {
        const msg = error.message || 'Google sign-in failed';
        setShowErr(msg);
        toast.error(msg);
      });
  };

  const handleForget = () => {
    if (!emailRef.current.value) {
      toast.warn('Please enter your email first!');
      return;
    }
    navigate(`/forgatePassword/${emailRef.current.value}`);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
      <ToastContainer />
      <div className="card w-full max-w-sm shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              required
              type="email"
              name="email"
              ref={emailRef}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              required
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right">
            <button type="button" onClick={handleForget} className="text-sm text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignin}
          className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <FcGoogle className="text-xl mr-2" />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <NavLink to="/register" className="text-primary font-semibold hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
