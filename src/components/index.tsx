import React, {ChangeEvent, useState} from "react";
import "./index.css";
import {Signin} from "./Firebase/google";
import {SignFacebook} from "./Firebase/Facebook";
import {SignGithub} from "./Firebase/Github";

// const { Component } = React;

// export class EntryPage extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             currentView: "signUp"
//         }
//     }
//
//     changeView = (view) => {
//         this.setState({
//             currentView: view
//         })
//     }
//
//     currentView = () => {
//         switch(this.state.currentView) {
//             case "signUp":
//                 return (
//                     <form>
//                         <h2>Sign Up!</h2>
//                         <fieldset>
//                             <legend>Create Account</legend>
//                             <ul>
//                                 <li>
//                                     <label for="username">Username:</label>
//                                     <input type="text" id="username" required/>
//                                 </li>
//                                 <li>
//                                     <label for="email">Email:</label>
//                                     <input type="email" id="email" required/>
//                                 </li>
//                                 <li>
//                                     <label for="password">Password:</label>
//                                     <input type="password" id="password" required/>
//                                 </li>
//                             </ul>
//                         </fieldset>
//                         <button>Submit</button>
//                         <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
//                     </form>
//                 )
//                 break
//             case "logIn":
//                 return (
//                     <form>
//                         <h2>Welcome Back!</h2>
//                         <fieldset>
//                             <legend>Log In</legend>
//                             <ul>
//                                 <li>
//                                     <label for="username">Username:</label>
//                                     <input type="text" id="username" required/>
//                                 </li>
//                                 <li>
//                                     <label for="password">Password:</label>
//                                     <input type="password" id="password" required/>
//                                 </li>
//                                 <li>
//                                     <i/>
//                                     <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
//                                 </li>
//                             </ul>
//                         </fieldset>
//                         <button>Login</button>
//                         <button onClick={()=>SigninWithFacebook}>Facebook</button>
//                         <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
//                     </form>
//                 )
//                 break
//             case "PWReset":
//                 return (
//                     <form>
//                         <h2>Reset Password</h2>
//                         <fieldset>
//                             <legend>Password Reset</legend>
//                             <ul>
//                                 <li>
//                                     <em>A reset link will be sent to your inbox!</em>
//                                 </li>
//                                 <li>
//                                     <label for="email">Email:</label>
//                                     <input type="email" id="email" required/>
//                                 </li>
//                             </ul>
//                         </fieldset>
//                         <button>Send Reset Link</button>
//                         <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
//                     </form>
//                 )
//             default:
//                 break
//         }
//     }
//
//
//     render() {
//         return (
//             <section id="entry-page">
//                 {this.currentView()}
//             </section>
//         )
//     }
// }
export const Facebook :React.FC<any> = () => {

    return(
       <>
           <div className="background">
               <div className="shape"></div>
               <div className="shape"></div>
           </div>
           <form>
               <h3>Login Here</h3>

               <label htmlFor="username">Username</label>
               <input type="text" placeholder="Email or Phone" id="username"/>

                   <label htmlFor="password">Password</label>
                   <input type="password" placeholder="Password" id="password"/>
               <button>Log In</button>
               <div className="social">
                   <div className="go" onClick={Signin}><i className="fab fa-google"  ></i> Google</div>
                   <div className="fb" onClick={SignFacebook}><i className="fab fa-facebook"  ></i> Facebook</div>
                   <div className="fb" onClick={SignGithub}><i className="fab fa-github"  ></i> Github</div>
               </div>
           </form>
       </>
    )
}