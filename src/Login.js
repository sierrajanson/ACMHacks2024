// import './Login.css'
// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
// import { getDatabase } from 'firebase/database';
// // import firebaseApp from '../firebase';
// // https://www.youtube.com/watch?v=qYER6hAgJik <-- great video teaching how to set up authentication with firebase
// // firebase docs in general are so good!
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [errorMsgTxt, setErrorTxt] = useState("");
//   const [seed, setSeed] = useState(1);


//   const auth = getAuth();
//   const db = getDatabase(firebaseApp);
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     try{
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Error creating account", error);
//     }
//   }
//   const handleSignIn = async () => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//         navigate('/');
//       } catch (error) {
//         if (error.code == 'auth/invalid-login-credentials'){
//           console.log("invalid credential please try again");
//           setErrorTxt("Invalid Credential Please Try Again");
//           setSeed(2);
//         }
//         console.error("Error signing in with email/password:", error);
//       }
//   }         
//   useEffect(() => {
//     const hasRedirected = localStorage.getItem('redirected');
//     if (hasRedirected) {
//       setLoggedIn(true);
//     }
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log("User is signed in:", uid);
//         setLoggedIn(true);
//       } else {
//         console.log("User is signed out");
//         setLoggedIn(false);
//       }
//     });
//     return () => unsubscribe();
//   }, [auth, navigate]);
//   const handleSignOut = async () => {
//     try {
//       localStorage.removeItem('redirected');
//       navigate('/');
//       await signOut(auth);
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   }

//   const ErrorMsg = () => {
//     console.log(seed);
//     return(
//       <h6 style={{color:'red'}}>{errorMsgTxt}</h6>
//     );
//   }

//   useEffect(() => {
//     ErrorMsg();
//   },[errorMsgTxt]);

//   return (
//     <div className="main_content">
//         <div className="intro">
//             <div>
//               {loggedIn ? (
//                 <div>
//                   <h1> Logout</h1>
//                   <h3> Have a good day! </h3>
//                   <button class="buttonlog" onClick={handleSignOut}>Sign Out</button>
//                 </div>
//               ):<div>
//                   <h1> Login </h1>
//                   <h3>Email/Password Login:</h3>
//                   <ErrorMsg key={seed}/>
//                   <input id="email_css" placeholder='Email' class="form_log" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                   <br />
//                   <input placeholder="Password" id="password_css" class="form_log" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <br />
//                   <button class="buttonlog" onClick={handleSignIn}>Sign In</button>
//                   <button class="buttonlog" onClick={handleSignUp}>Sign Up</button>
  
//                 </div>
//               }
//           </div>
//         </div>
//     </div>
//   );
// }
// export default Login;


import { setConsent } from "firebase/analytics";
import React, {useEffect, useState} from "react"
import { auth, provider } from "./firebase/firebase";
import { signInWithEmailAndPassword,  signInWithPopup} from "firebase/auth";
import { useAuth } from "./contexts/authContext";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./firebase/auth";
import Home from "./Home";


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
      {value? <Home/>:
      <button onClick={handleClick}>Sign In with Google</button>
      }
    </div>
  )
}
 
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


//   // const login = (e) => {
//   //   e.preventDefault();
//   //   if(!isSigningIN)

//   //   signInWithEmailAndPassword(auth, email, password)
//   //   .then((userCredential) => {
//   //     console.log(userCredential);
//   //   }).catch((error) =>{
//   //     console.log(error);
//   //   });
//   // };



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

export default Login;
