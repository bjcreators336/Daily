import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
  
  <h1>
    Enter Text Below to Analyze</h1>

  return (
    <>
      <Router>
        <Navbar title="Test" aboutText="AboutUS" mode={mode} linkText="Link" toggleMode={toggleMode} type={type} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={
            <>
              <h1 className='container my-3'>Enter Text Below to Analyze</h1>
              <TextForm mode={mode} />
            </>
          } />
        </Routes>
      </Router>
      <footer className="container my-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
