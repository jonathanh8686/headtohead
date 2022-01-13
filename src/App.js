import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import Homepage from './components/Homepage'
import Lobby from './components/Lobby'
import socket from './Socket'


function App() {
  
  const [socket, setSocket] = useState(null);

  /*
  useEffect(()=> {
    const newSocket = io('localhost:3001');
    console.log(newSocket);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket])
  */
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='room/*' element={<Lobby/>}/>
      </Routes>
      
      
    </Router>
    
  );
}

export default App;
