import React, {useState} from "react";
import {getAuth,signInWithPopup} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebaseconfig/config";




export interface IFacebookPageProps{}

export const GooglePage : React.FC<IFacebookPageProps> = (props) =>{
    const navigate = useNavigate();
    const [authing,setAuthing] = useState(false)

    const signInWithGoogle = async ()=>{
        setAuthing(true)

        signInWithPopup(auth,new GoogleAuthProvider())
            .then(response=>{
                console.log(response)
                navigate("/welcome")
            })
            .catch(error =>{
                console.log(error)
                setAuthing(false)
            })

    }
    return(
        <div className="fb" onClick={signInWithGoogle}><i className="fab fa-google"></i> Google</div>
    )
}