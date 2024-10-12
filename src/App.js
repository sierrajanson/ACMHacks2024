// import * as ReactDOM from 'react-dom/client'
// import './App.css';
// import { Component, createRef } from 'react'
// import Map from '@arcgis/core/Map'
// import MapView from '@arcgis/core/views/MapView'
// import CustomWidget from './CustomWidget'
// import Home from './components/Home.js';
// import Login from './components/Login.js';

// class App extends Component {
//   mapDiv = createRef()
//   mapView
//   widgetsLoaded = false

//   componentDidMount = () => {
//     let map = new Map({
//       basemap: 'streets-vector'
//     })
    
//     this.mapView = new MapView({
//       map: map,
//       zoom: 12,
//       center: {
//         latitude: 36.994117,
//         longitude: -122.060792
//       }
//     })

//     this.mapView.container = this.mapDiv.current

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

//   render = () => {
//     return (
//       <div className="App">
//         <Router>
//           <Navbar/>
//             <Routes>
//                 <Route path='/' element={<Home/>}/>
//                 <Route path='/login' element={<DevPost/>} />
//             </Routes>
//         </Router>
//         <div>
//           testing
//         </div>
//         <div
//             ref={this.mapDiv}
//             style={{
//               height: '50vh',
//               width: '50vw'}}
//             >
//         </div>
//       </div>
//     )
//   }
// }

// export default App;


import './App.css';
import Home from './Home.js'
import Navbar from './Navbar.js'

import {Link, useNavigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import DevPost from "./components/DevPost.js"
import React, {useState, useEffect} from 'react';
// import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import Login from './Signing Info/Login.js'
import SignUp from './Signing Info/SignUp.jsx';
import AuthDetails from './Signing Info/AuthDetails.jsx';

function App() {
  // w vsc react js config url: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
  // w push to git tutorial: https://www.datacamp.com/tutorial/git-push-pull
  // install firebase, npm, node, react-route-dom modules to run this

  return (
    <div className="App">
      {/* <Login /> 
      <SignUp />
      <AuthDetails />

      <h1>Hello Test</h1> */}

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

