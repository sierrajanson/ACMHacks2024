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
import Login from './Login.js'
import {Link, useNavigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
// import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/login' element={<Login/>} /> */}
            </Routes>
      </Router>
    </div>
  );
}

export default App;

