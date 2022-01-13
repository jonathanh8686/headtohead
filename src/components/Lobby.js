import React, {useState, useEffect} from 'react'
import socket from '../Socket'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'

export default function Lobby(props) {
    //list of player names (given an array)
    //ready button
    const [resultMsg, setResultMsg] = useState('');
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
                setResultMsg(msg['message']);
                window.open(`${window.location.origin}/failure`, '_self');
            }
        })
        
        
        
    }, []);

    var settings = "flex-col-1 bg-[#343a44] h-screen"
    return resultMsg == '' ? (
        <div className={settings}>
            
            <h1> {window.location.pathname} </h1>
            <h1> {resultMsg} </h1>
        </div>
        
    ) : (
        <Homepage/>
    )
}
