import React, {useState} from "react";
import {getAuth, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {useNavigate} from "react-router-dom";
import {config} from "../firebaseconfig/config";
import {IFacebookPageProps} from "./google";



let signin = initializeApp(config.firebaseConfig)
export const GithubPage : React.FC<IFacebookPageProps> = (props) =>{
    const Auth = getAuth(signin)
    const navigate = useNavigate();
    const [authing,setAuthing] = useState(false)

    const signInWithGithub = async ()=>{
        setAuthing(true)

        signInWithPopup(Auth,new GithubAuthProvider())
            .then(response=>{
                console.log(response)
                navigate("/welcome")
            })
            .catch(error =>{
                console.log(error.code)
                setAuthing(false)
            })
    }
    return(
        <div className="fb" onClick={signInWithGithub}><i className="fab fa-github"  ></i>Github</div>
    )
}



