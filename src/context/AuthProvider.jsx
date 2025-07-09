import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,  onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }
 const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
      
 }

 const provider = new GoogleAuthProvider();

 const googleSignin=()=>{
    return signInWithPopup(auth, provider)
 }

 const resetUserPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
    
 }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log("current User inside useEffect on auth state change" , currentUser);
            setUser(currentUser)
            // console.log(loading);
           
            
            setLoading(false)
            
        })
        return ()=>{
            unSubscribe();
        }
    },[user])

    const userInfo ={
        user,
        setUser,
        loading,
        createUser,
        updateUserProfile,
        singInUser,
        singOutUser,
        resetUserPassword,
        googleSignin
    }
    return (
        <AuthContext  value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;