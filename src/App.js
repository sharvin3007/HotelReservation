import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './Pages/Home/Home.jsx' 
import Rooms from "./Pages/Rooms/Rooms.jsx";
import About from "./Pages/About/About.jsx";


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/rooms" element={<Rooms/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
