import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'



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
            <>
        <Navbar title="Test" aboutText="AboutUS" mode={mode} linkText="Link" toggleMode={toggleMode} type={type} />
              <h1 className='container my-3'>Enter Text Below to Analyze</h1>
              <TextForm mode={mode} />
            </>
      <footer className="container my-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
