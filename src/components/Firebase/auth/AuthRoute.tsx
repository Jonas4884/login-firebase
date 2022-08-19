import React, {useEffect, useState} from "react";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebaseconfig/config";

export interface IAuthRouteProps{
    children :any

}

const AuthRoute: React.FC<IAuthRouteProps> = (props)=>{
   const { children } = props;
   const navigate = useNavigate();
   const [loading,setloading] = useState(false);

        useEffect(()=>{
           AuthCHeck();
            },[auth])


    const AuthCHeck = onAuthStateChanged(auth,(user)=>{
            if(user){
                setloading(false)
            }
            else {

                navigate("/welcome")

            }
        });

            return(
        <>{children}</>
    )
}
export default AuthRoute;