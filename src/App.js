import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react';
import Joinroom from './components/JoinRoom'

function App() {
  var settings = "flex-col-1"
  return (
    <div className={settings}>
      <Navbar/>
      <div className = "min-h-screen bg-[#343a44] text-center">
        <Joinroom/>
      </div>
    </div>
  );
}

export default App;
