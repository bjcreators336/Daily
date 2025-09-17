import './App.css';
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [type, setType] = useState(' Enable Dark Mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setType('Disable Dark Mode');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      setType('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };
  

  return (
    <Router>
      <Navbar title="Test" aboutText="AboutUS" mode={mode} linkText="Link" toggleMode={toggleMode} type={type} />
      <h1 className='container my-3'>
        Enter Text Below to Analyze
      </h1> 
      <Routes> 

        <Route exact path="/" element={<TextForm mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <footer className="container " style={{ marginTop: "20px", padding: "10px", borderTop: "1px solid", borderColor: mode === "dark" ? "white" : "black", textAlign: "center" }}>
        <p> Copyright © All rights reserved by Faizan Asif @BJ.Creators </p>
      </footer>
    </Router> 
  );
}

export default App;
