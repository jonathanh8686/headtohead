import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react';
import Joinroom from './components/JoinRoom'
import io from 'socket.io-client'


function App() {
  var settings = "flex-col-1 bg-[#343a44]"
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
    <div className={settings}>
      <Navbar/>
      <div className = "min-h-screen  text-center mt-5">
        <Joinroom/>
      </div>
    </div>
  );
}

export default App;
