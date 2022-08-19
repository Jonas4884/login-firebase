import {FacebookAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import {auth, config} from "../firebaseconfig/config";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {IFacebookPageProps} from "./google";


export const FacebookPage: React.FC<IFacebookPageProps> = (props) => {
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false)

    const signInWithFacebook = async () => {
        setAuthing(true)
        signInWithPopup(auth, new FacebookAuthProvider())
            .then(response => {
                console.log(response)
                navigate("/welcome")
            })
            .catch(error => {
                console.log(error)
                setAuthing(false)
            })


        }
    return (
        <>
            <div className="fb" onClick={signInWithFacebook}><i className="fab fa-facebook"></i> Facebook</div>
        </>

    )
}




