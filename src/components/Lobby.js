import React, {useState, useEffect} from 'react'
import socket from '../Socket'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'

export default function Lobby(props) {
    //list of player names (given an array)
    //ready button
    var failureResult='';
    useEffect(() => {
        console.log(props);
        socket.on("test", (msg) => {
            console.log(msg);
        });
        socket.on('roomRequestResult', (msg) => {
            if(msg['result'] == 'failure'){
                failureResult = msg['message']
                window.open(`${window.location.origin}/failure/${failureResult}`, '_self');
            }
        })
        var pth = window.location.pathname;
        socket.emit('roomRequest', {
            'nickname': 'asdf',
            'roomID': pth.split('/').pop()
        })
        
    }, []);

    var settings = "flex-col-1 bg-[#343a44] h-screen"
    return (
        <div className={settings}>
            
            <h1> {window.location.pathname} </h1>
        </div>
        
    )
}
