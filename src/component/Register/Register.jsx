// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from 'react-icons/tb'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { saveUserDataInDB, uploadImage } from '../API/utilities';
// import { auth } from '../../firebase.init';

const Register = () => {
  const userInfo = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { googleSignin, createUser, updateUserProfile, setUser,  loading } = userInfo


  const handleRegister = async(e) => {
    e.preventDefault()
    // const name = e.target.name.value
    const name = e.target.name.value
    const email = e.target.mail.value
    const password = e.target.password.value
    const imageData = e?.target?.image?.files[0]

    // image url response from imgbb
    const photoUrl = await uploadImage(imageData)

    setErrorMessage('')

    const passwordCheker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

    if (passwordCheker.test(password) === false) {
      setErrorMessage("Password must have one lowercase, one uppercase, one digit and 6 characters or longer")

      return;
    }




   
    createUser(email, password).then(result => {
      // console.log(result);
      const userinfo = result.user
      updateUserProfile(name, photoUrl).then(async() => {

        setUser({ ...userinfo, name, photoUrl })
        console.log(userinfo);
        toast.success("User Create Successful!!");
        // setUser({...user, displayName: name, photoURL: photoUrl})
        // console.log(user);
       

      const userData = {
        name,
        email,
        image: photoUrl,
      }
      // Save user data in db
      await saveUserDataInDB(userData)


      }).catch((error) => {


        setErrorMessage(error.message);
        setUser(userinfo)

      });


    }).catch(error => {
      setErrorMessage(error.message);


    })



  }

  if (errorMessage) {
    toast.error(errorMessage);
  }

  const handleGoogleSignin = () => {

    setErrorMessage('')
    googleSignin().then(async(result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user);
      setUser(user)
      const userData = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      }
      await saveUserDataInDB(userData)

      // navigate(location?.state || '/')
      toast.success("User Login Successfully By Google");

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      setErrorMessage(errorCode);
      const errorMessage = error.message;

      setErrorMessage(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      setErrorMessage(email);
      // The AuthCredential type that was used.
      const credential = <GoogleAuthProvider></GoogleAuthProvider>;
      setErrorMessage(credential);
      // ...
    });
  }


  return (
    <div className="card bg-base-100 mt-20 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <ToastContainer />
      <div className="card-body">
        <h1 className="text-2xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">User Name</label>
          <input required type="text" className="input" name='name' placeholder="User Name" />
          <label className="label" >Select a image</label>
          <input className='cursor-pointer'type='file' id='image' name='image'accept='image/*'/>
          <label className="label" >Email</label>
          <input required type="email" className="input" name='mail' placeholder="Email" />
          <label className="label">Password</label>
          <div className='relative'>
            <input required type={showPassword ? "text" : "password"} className="input" name='password' placeholder="Password" />
            <button onClick={(e) => { e.preventDefault(), setShowPassword(!showPassword) }} className='btn btn-xs absolute top-2 right-6'>{showPassword ? <FaEye /> : <FaEyeSlash />} </button>
          </div>

          {/* (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,} */}
          <button className="btn btn-neutral mt-4"> {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Register'
              )}</button>
        </form>

        <div className=' text-md font-bold text-center text-emerald-300'>Login With Google</div>
        <button onClick={handleGoogleSignin} className="btn bg-emerald-300 mt-1">Google Login</button>

        <p>If You Already Have Account  <NavLink className='text-blue-400' to='/login'>Please Login</NavLink> </p>
        {errorMessage && <p className='text-red-600 font-bold pt-1'>{errorMessage}</p>

        }

      </div>

    </div>
  );
};

export default Register;