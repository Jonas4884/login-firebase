import React, {ChangeEvent, useState} from "react";
import "./index.css";
import { GooglePage} from "./Firebase/socialsignin/google";
import {FacebookPage} from "./Firebase/socialsignin/Facebook";
import {GithubPage} from "./Firebase/socialsignin/Github";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "./Firebase/firebaseconfig/config";


export interface ILoginPageProps{}

export const Facebook :React.FC<ILoginPageProps> = (props) => {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    const signing = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage)
            });
    }
    const noinput = async ()=>{
        alert("invalid input")
    }
    return(
       <>
           <div className="background">
               <div className="shape"></div>
               <div className="shape"></div>
           </div>
           <form>
               <h3>Login Here</h3>

               <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email..." id="username" onChange={(event)=>setEmail( event.target.value)}/>

               <label htmlFor="password">Password</label>
                   <input type="password" placeholder="Password" id="password" onChange={(event)=>setPassword(event.target.value)}/>

               <button className="login_button" onClick={email !== "" && password !== ""?signing : noinput}>Log In</button>

               <div className="social">
                   <GooglePage/>
                   <FacebookPage/>
                   <GithubPage/>
               </div>
           </form>
       </>
    )
}