import React from 'react'
import Navbar from './Navbar'

const handle1= () =>{
    Navbar.backgroundColor="#561013"
    // body.backgroundColor = "#1C3144"
}
const handle2= () =>{
    Navbar.backgroundColor="#3B0D11"
    // body.backgroundColor = "#383171"
}
const handle3= () =>{
    Navbar.backgroundColor="#22162B"
    // body.backgroundColor = "#028090"
}
const handle4= () =>{
    Navbar.backgroundColor="#363732"
    // body.backgroundColor = "#53D8FB"
}
const handle5= () =>{
    Navbar.backgroundColor="#151515"
    // body.backgroundColor = "#A63D40"
}
const handle6= () =>{
    Navbar.backgroundColor="#FC7753"
    // body.backgroundColor = "#F3DE8A"
}

function Buttons(props) {
  return (
    <>
   <div className="buttons mx-4 ">
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#561013"}} onClick={handle1} className='mx-2'></button>
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#3b0d11"}} onClick={handle2} className='mx-2'></button>
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#22162b"}} onClick={handle3} className='mx-2'></button>
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#363932"}} onClick={handle4} className='mx-2'></button>
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#151515"}} onClick={handle5} className='mx-2'></button>
    <button  style={{borderRadius:75, height: 40, width: 40 , backgroundColor:"#fc7753"}} onClick={handle6} className='mx-2'></button>
   </div>
    </>
  )
}

export default Buttons
