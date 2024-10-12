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

import {Link, useNavigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
// import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import Login from './Signing Info/Login.jsx'
import SignUp from './Signing Info/SignUp.jsx';
import AuthDetails from './Signing Info/AuthDetails.jsx';

function App() {
  return (
    <div className="App">
      <Login /> 
      <SignUp />
      <AuthDetails />

      {/* <h1>Hello Test</h1> */}

      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

