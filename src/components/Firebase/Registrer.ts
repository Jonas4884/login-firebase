import React, {useState} from "react";
import firebase from "firebase/compat";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import auth = firebase.auth;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAhRulRd1LKymbt1pB8I9UV3bGCKODGd4E",
    authDomain: "authentication-3b283.firebaseapp.com",
    projectId: "authentication-3b283",
    storageBucket: "authentication-3b283.appspot.com",
    messagingSenderId: "332384141623",
    appId: "1:332384141623:web:b5085a6a607e55c470dab2",
    measurementId: "G-5W0P7J9VX1"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)
const registre= async (registrer:string,password:string) =>{
    try{
        const user = await createUserWithEmailAndPassword(Auth,registrer,password);
        console.log(user)
    }catch (error) {
        console.log(error)
    }
}



