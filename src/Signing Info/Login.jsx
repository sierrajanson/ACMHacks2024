
import React, {useEffect, useState} from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithEmailAndPassword,  signInWithPopup} from "firebase/auth";
import { useAuth } from "../contexts/authContext";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import Home from "../Home";
import { getAuth } from "firebase/auth";
import AuthDetails from "./AuthDetails";
import { useNavigate } from "react-router-dom";
import '../Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('');
    const navigate = useNavigate(); // added

    const handleClick = ()=>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);

      navigate('/home'); //added
    }).catch((error) => {
      console.error("Google Sign-In Error", error);
    })
  };

  useEffect(()=>{
    setValue(localStorage.getItem("email"))
  })


    const login = (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/home');     // added
        }).catch((error) => {
          console.log(error)
      });
    };
  
  return(
    <div className="log-in-background">
      <div className = "log-in-container" >
      <form onSubmit={[login]}> 
        <h1>Please log in!</h1>
      </form>

      <button onClick={handleClick}>Sign In with Google</button>
    </div>
    </div>
  );
};

export default Login
