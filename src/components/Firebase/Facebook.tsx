import {getAnalytics} from "firebase/analytics";
import {FacebookAuthProvider, getAuth} from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAhRulRd1LKymbt1pB8I9UV3bGCKODGd4E",
    authDomain: "authentication-3b283.firebaseapp.com",
    projectId: "authentication-3b283",
    storageBucket: "authentication-3b283.appspot.com",
    messagingSenderId: "332384141623",
    appId: "1:332384141623:web:b5085a6a607e55c470dab2",
    measurementId: "G-5W0P7J9VX1"
};





let signin = initializeApp(firebaseConfig)
export const auth = getAuth(signin)

 const SigninWithFacebook = new FacebookAuthProvider();

export const SignFacebook =()=>{
    signInWithPopup(auth ,SigninWithFacebook)
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error))
}




