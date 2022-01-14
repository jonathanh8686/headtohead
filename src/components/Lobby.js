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
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [nicknameList, setNicknameList] = useState([]);
    const [nickname, setNickname] = useState('');

    const genNickname = () => {
        let alph = 'abcdefghijklmnopqrstuvwxyz';
        var result = '';
        for(let i = 0; i < 10; i++){
            result += alph.charAt(Math.floor(Math.random() * alph.length));
        }
        return result;
    }
    useEffect(() => {
        console.log(props);
        socket.on("test", (msg) => {
            console.log(msg);
        }); 
        var pth = window.location.pathname;
        var newNickname = genNickname();
        socket.emit('roomRequest', {
            'nickname': newNickname,
            'roomID': pth.split('/').pop()
        });
        
        socket.on('roomRequestResult', (msg) => {
            if(msg['result'] == 'failure'){
                setErrorMessage(msg['message']);
            } else {
                setSuccess(true);
                setNickname(newNickname);
                socket.emit('getNicknameList');
                socket.on('updateNickname', (msg) => {
                    setNicknameList(msg['nicknames']);
                })
            }
        })
    }, []);
    useEffect(() => {
        socket.emit('updatePlayerNickname', {
            'newName' : nickname
        })
        socket.emit('getNicknameList')
    }, [nickname]);
    var settings = "flex flex-col space-y-2 justify-center bg-[#343a44] w-screen h-screen"
    return success ? (
        <div className={settings}>
            <div className="flex flex-row justify-center space-x-2">
                <div className="w-1/2">
                    <LobbySettings/>
                </div>
                <div className = "flex flex-col space-y-2 w-1/4 h-screen">
                    <div>
                        <PlayerName name={nickname} setNickname={setNickname}/>
                    </div>
                    <div className = "grow">
                        <PlayerList content={nicknameList}/>
                    </div>
                    <div>  
                        <Ready/>
                    </div>
                </div>
                
                
            </div>
        </div>
    ) : (
        <Homepage error={true} message={errorMessage}/>
    )
}
