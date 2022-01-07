import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react';

function App() {
  var settings = "flex-col text-center grid-cols-1"
  return (
    <div className={settings}>
      <Navbar/>
      
    </div>
  );
}

export default App;
