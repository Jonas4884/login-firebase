import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export const config = {
    firebaseConfig : {
        apiKey: "AIzaSyCY6nZzy7ViD7XEtqJgyw2zdOdRQtwul_Q",
        authDomain: "login-54234.firebaseapp.com",
        projectId: "login-54234",
        storageBucket: "login-54234.appspot.com",
        messagingSenderId: "55034987633",
        appId: "1:55034987633:web:231358febcd140c01947d0",
        measurementId: "G-HJ4GC153K4"
    }
}
const initfirebase = initializeApp(config.firebaseConfig)
export const auth = getAuth(initfirebase)