import Home from "../components/Home"
import Navbar from "../components/Navbar";

import React from "react";
import { Router,Route,Routes } from "react-router-dom";
import About from "../components/pages/About.jsx";
import Contacts from "../components/pages/Contacts.jsx";
import './App.css'

function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <Router> */}  
    {/* if Router is present then it is not rendering the website */}
        <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/about" element={<About></About>}></Route>
                  <Route path="/contact" element={<Contacts></Contacts>}></Route>
      </Routes>
    {/* </Router> */}
      
    </>
  );
}

export default App
