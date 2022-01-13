import React, {useState, useEffect} from 'react'
import socket from '../Socket'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'

export default function Lobby(props) {
    //list of player names (given an array)
    //ready button
    const [success, setSuccess] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        console.log(props);
        socket.on("test", (msg) => {
            console.log(msg);
        });
        var pth = window.location.pathname;
        socket.emit('roomRequest', {
            'nickname': 'asdf',
            'roomID': pth.split('/').pop()
        })
        
        socket.on('roomRequestResult', (msg) => {
            if(msg['result'] == 'failure'){
                setSuccess(false);
                setErrorMessage(msg['message']);
            }
        })
        
        
        
    }, []);

    var settings = "flex-col-1 bg-[#343a44] h-screen"
    return success ? (
        <div className={settings}>
            
            <h1> {window.location.pathname} </h1>
        </div>
        
    ) : (
        <Homepage error={true} message={errorMessage}/>
    )
}
