import React, {useEffect, useState} from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './acmlogo.png'; 

const Navbar = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) =>{
          if (user){
              setAuthUser(user)
          } else {
              setAuthUser(null);
          }
      });

      return () =>{
          listen();
      }

    }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
        console.log("sign out successfully");
        navigate('/');
    }).catch(error => console.log(error));
  }
  
  return (
    <nav className="navbar">
      <div className="icon-container">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="link_container">
        {authUser ? (
          <>
            <li>
              <Link to="/home" className="link">Home</Link>
            </li>

            <button onClick={userSignOut}>Sign Out</button>
              
             
          </>
        ) : (
        
        <li>
          <Link to="/" className="link">Login</Link>
        </li>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
