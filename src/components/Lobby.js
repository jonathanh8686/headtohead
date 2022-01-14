import React, {useState, useEffect} from 'react'
import socket from '../Socket'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import LobbySettings from './LobbySettings'
import PlayerList from './PlayerList'
import Ready from './Ready'

export default function Lobby(props) {
    //list of player names (given an array)
    //ready button
    const [success, setSuccess] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [nicknameList, setNicknameList] = useState([]);
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
        
        socket.on('updateNickname', (msg) => {
            setNicknameList(msg['nicknames']);
        })
        
        
    }, []);

    

    var settings = "flex-col-1 flex-col space-y-2 bg-[#343a44] h-screen"
    return success ? (
        <div className={settings}>
            <div>
                <LobbySettings/>
            </div>
            <div>
                <PlayerList/>
            </div>
            <div>
                <Ready/>
            </div>
            
            <h1> {window.location.pathname} </h1>
        </div>
        
    ) : (
        <Homepage error={true} message={errorMessage}/>
    )
}
