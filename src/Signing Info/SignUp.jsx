import { createUserWithEmailAndPassword } from "firebase/auth";
import {React, useState} from "react";
import { auth } from "../firebase/firebase";




const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) =>{
        console.log(error);
      });
    };
  
    return(
      <div className="log-in-container">
        <form onSubmit={[signUp]}>
          <h1>Create an Account Here!</h1>
          <input
          type="email" 
          placeholder="Enter your email to sign up" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
  
        <input 
          type="password"    
          placeholder="Enter your password to sign up" 
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          ></input>
  
          <button type="Sign Up">Sign Up Here!</button>
          
        </form>
      </div>
    )
  };
  
  export default SignUp;