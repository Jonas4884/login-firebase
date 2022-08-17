import React, {useState} from "react";
import {getAuth,signInWithPopup} from "firebase/auth";
import {initializeApp} from "firebase/app";

import {GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAhRulRd1LKymbt1pB8I9UV3bGCKODGd4E",
    authDomain: "authentication-3b283.firebaseapp.com",
    projectId: "authentication-3b283",
    storageBucket: "authentication-3b283.appspot.com",
    messagingSenderId: "332384141623",
    appId: "1:332384141623:web:b5085a6a607e55c470dab2",
    measurementId: "G-5W0P7J9VX1"
};




 const signin =initializeApp(firebaseConfig)
   export const Auth = getAuth(signin)
  const SignProvide= new GoogleAuthProvider();

   export const Signin =()=>{
       signInWithPopup(Auth,SignProvide)
           .then((result)=>console.log(result))
           .catch((error)=>console.log(error))
   }


