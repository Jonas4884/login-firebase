import React from "react";
import {getAuth,signOut} from "firebase/auth";
import HistoryRouter, {useNavigate} from "react-router-dom";
import {auth} from "../firebaseconfig/config";
import "./welcome.css"


export const Welcome :React.FC = ()=> {
    const navigate = useNavigate();
    const logout = async () => {
        signOut(auth).then((response) => {
            console.log(response)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        });
}
    return(
        <>
            <p>You are Authenticated</p>
            <i className={"close"}>Sign out for another Login</i>

            <button onClick={()=>logout()} className={"signout"}>Sign OUt</button>

        </>
    )
}