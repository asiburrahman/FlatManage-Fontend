import React, { use, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
  const {singInUser, setUser, googleSignin} = use(AuthContext)
  const [showErr, setShowErr] = useState('')
const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef()
 
  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    setShowErr('')
    singInUser(email, password).then((result) => {
      toast.success("User Sign in Successful!!");
      // console.log("login successfully");
      
      //  navigate(location?.state || '/')
      
    })
    .catch((error) => {
      setShowErr(error.message);
      
    });;
    
  }


  // const handleGoogleSignin=()=>{

  //   setShowErr('')
  //   googleSignin().then((result) => {
  //     const user = result.user;
  //     // console.log(user);
  //     setUser(user)
  //     // location.reload()
  //     //  navigate( '/')
  //     toast.success("User Login Successfully By Google");
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     setShowErr(errorCode);
  //     const errorMessage = error.message;

  //     setShowErr(errorMessage);
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     setShowErr(email);
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     setShowErr(credential);
  //     // ...
  //   });
  // }

 const handleGoogleSignin = () => {
    setShowErr('');
    googleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Logged in with Google!');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch((error) => {
        const message = error.message || 'Google Sign-In failed';
        setShowErr(message);
        toast.error(message);
      });
  };






  const handleForget= ()=>{
   
    navigate(`/forgatePassword/${emailRef.current.value}`)
  }

  if (showErr) {
    toast.error(showErr)
  }
    return (
    <div className="card min-h-11/10 bg-base-100 mt-20 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <ToastContainer /> 
      <div className="card-body">
      <h1 className="text-2xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input required type="email" className="input" name='email' ref={emailRef} placeholder="Email" />
          <label className="label">Password</label>
          <input required type="password" className="input" name='password' placeholder="Password" />
          <div><a onClick={handleForget} className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div className=' text-md font-bold text-center text-emerald-300'>Login With Google</div>
                  <button onClick={handleGoogleSignin} className="btn bg-emerald-300 mt-1">Google Login</button>
        <p>If You Have No Account  <NavLink className='text-blue-400' to='/register'>Please Register</NavLink> </p>
      </div>
    </div>
    );
};

export default Login;