import React from 'react';
import './App.css';  //coloca de forma altomatica o file App.css dentro do file App.js
import logo from './assets/logo.svg';



import Routes from './routes';
//import { Route } from 'react-router-dom';


function App() {
  
  
  return (
       <div className="container"> 
           <img src={logo} alt="AirCnC"/> 
           <div className="content">
             <Routes/>
           </div>
       </div>
     );
}

export default App;
