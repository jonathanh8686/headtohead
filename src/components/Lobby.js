import React, {useState, useEffect} from 'react'
import socket from '../Socket'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import LobbySettings from './LobbySettings'
import PlayerList from './PlayerList'
import Ready from './Ready'
import PlayerName from './PlayerName'

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

    var settings = "flex flex-row space-x-2 bg-[#343a44] w-screen h-screen"
    return success ? (
        <div className={settings}>
            <div className="w-1/2">
                <LobbySettings/>
            </div>
            <div className = "flex flex-col space-y-2 w-1/4 h-screen">
                <div>
                    <PlayerName/>
                </div>
                <div class = "h-80">
                    <PlayerList content={nicknameList}/>
                </div>
                <div>  
                    <Ready/>
                </div>
            </div>
            
            
            <h1> {window.location.pathname} </h1>
        </div>
        
    ) : (
        <Homepage error={true} message={errorMessage}/>
    )
}
