import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import Homepage from './components/Homepage'
import Lobby from './components/Lobby'
import socket from './Socket'
import { getThemeProps } from '@mui/system';


function App() {
  
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState(false);
  
  /*
  useEffect(()=> {
    socket.on('roomRequestResult', (msg) => {
      if(msg['result'] == 'failure') setError(true);
    })
  }, [])
  */
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='room/*' element={<Lobby/>}/>
        <Route path='/failure' element={<Homepage error={true}/>}/>
      </Routes>
      
      
    </Router>
    
  );
}
/*
function RoomRoute(props) {
  return (
    <Route>
      {props.error ? <Redirect to='/'/> : <Lobby/>}
    </Route>
  )
}
*/
export default App;
