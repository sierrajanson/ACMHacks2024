// import './Login.css'
// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
// import { getDatabase } from 'firebase/database';
// // import firebaseApp from '../firebase';
// // https://www.youtube.com/watch?v=qYER6hAgJik <-- great video teaching how to set up authentication with firebase
// // firebase docs in general are so good!






import { setConsent } from "firebase/analytics";
import React, {useEffect, useState} from "react"
import { auth, provider } from "../firebase/firebase";
import { signInWithEmailAndPassword,  signInWithPopup} from "firebase/auth";
import { useAuth } from "../contexts/authContext";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import Home from "../Home";
import { getAuth } from "firebase/auth";





function Login(){
  const [value, setValue] = useState('')
  
  const handleClick = ()=>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
    
  }

  useEffect(()=>{
    setValue(localStorage.getItem("email"))
  })
  
  return (
    <div>
      {/* {value? <h1>testing</h1>: */}
      {value ? <Home/>: 
      <button onClick={handleClick}>Sign In with Google</button>
      }
    </div>
  )
}

export default Login;



// const Login = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const [value, setValue] = useState('')
//     const handleClick = ()=>{
//     signInWithPopup(auth, provider).then((data)=>{
//       setValue(data.user.email)
//       localStorage.setItem("email", data.user.email)
//     })
//   }

//   useEffect(()=>{
//     setValue(localStorage.getItem("email"))
//   })


//     const login = (e) =>{
//       e.preventDefault();
//       signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential)
//         }).catch((error) => {
//           console.log(error)
//       })
//     }
  
//   return(
//     <div className="log-in-container">
//       <form onSubmit={[login]}> 
//       {/* <form> */}

//         <h1>hello! You are here! Please log in!</h1>
//         <input
//         type="email" 
//         placeholder="Enter your email here to log in" 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         ></input>

//         <input 
//         type="password"  
//         placeholder="Enter your password here" 
//         value={password}
//         onChange={(e) =>setPassword(e.target.value)}
//         ></input>

//           <button type="submit">Log In</button>
//       </form>

//       <button onClick={handleClick}>Sign In with Google</button>

//     </div>
//   )
// };

// export default Login







 
  // return(
  //   <div className="log-in-container">
  //     <form onSubmit={[login]}>

  //       <h1>hello! You are here! Please log in!</h1>
  //       <input
  //       type="email" 
  //       placeholder="Enter your email here" 
  //       value={email}
  //         onChange={(e) => setEmail(e.target.value)}

  //       ></input>

  //       <input type="password" 
  //       placeholder="Enter your password here" 
  //       value={password}
  //       onChange={(e) =>setPassword(e.target.value)}
  //       ></input>

  //         <button type="submit">Log In</button>
  //     </form>
  //   </div>
  // );





// const Login = () => {
//   const { userLoggedIn } = useAuth()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isSigningIn, setIsSigningIn] = useState(false)
//   const [errorMessage, setErrorMessage] = useState('')



//   const onSubmit = async (e) =>{
//     e.preventDefault()
//     if(!isSigningIn){
//       setIsSigningIn(true) 
//       await doSignInWithEmailAndPassword(email, password)
//     } else {
//       setErrorMessage("Error: Unable to Sign in with email, User has already signed in")
//     }
//   }
  
//   const onGoogleLogin = (e) => {
//     e.preventDefault()
//     if(!isSigningIn){
//       setIsSigningIn(true)
//       doSignInWithGoogle().catch (err => {
//         setIsSigningIn(false)
//       })
//     } else {
//       setErrorMessage("Error: Unable to Sign in with Google, User has already signed in")
//     }
//   }


//   const login = (e) => {
//     e.preventDefault();
//     if(!isSigningIn)

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log(userCredential);
//     }).catch((error) =>{
//       console.log(error);
//     });
//   };



//   return(
//     <div className="log-in-container">
//       <form onSubmit={[login]}>

//         <h1>hello! You are here! Please log in!</h1>
//         <input
//         type="email" 
//         placeholder="Enter your email here" 
//         value={email}
//           onChange={(e) => setEmail(e.target.value)}

//         ></input>

//         <input type="password" 
//         placeholder="Enter your password here" 
//         value={password}
//         onChange={(e) =>setPassword(e.target.value)}
//         ></input>

//           <button type="submit">Log In</button>
//       </form>
//     </div>
//   )
// };


// export default Login;


