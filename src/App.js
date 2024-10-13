//     // this.mapView.when(() => {
//     //   if (!this.widgetsLoaded) {
//     //     let widgetNode = document.createElement('div')
//     //     let widgetRoot = ReactDOM.createRoot(widgetNode)
//     //     this.mapView.ui.add(widgetNode, 'top-left')
//     //     widgetRoot.render(<CustomWidget mapView={this.mapView} />)
//     //     this.widgetsLoaded = true
//     //   }
//     // })
//   }

import './App.css';
import Home from './Home.js'
import Navbar from './Navbar.js'

import {Link, useNavigate, BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
// import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import Login from './Signing Info/Login.jsx'
import SignUp from './Signing Info/SignUp.jsx';
import AuthDetails from './Signing Info/AuthDetails.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.js';

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const signedin = onAuthStateChanged(auth, (user) =>{
      setAuthUser(user);
    });

    return () =>signedin();
  });




  return (
    <div className="App">
      {/* <Login /> 
      <SignUp /> */}
      {/* <AuthDetails /> */}

      {/* <h1>Hello Test</h1> */}

      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={authUser ? <Home/>: <Navigate to="/"/>} />
                {/* <Route path='/SignUp' element={<SignUp/>}/> */}
            </Routes>
      </Router>
    </div>
  );
}

export default App;

