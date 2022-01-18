import React, { useState, useEffect } from 'react'
import socket from '../Socket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import LobbySettings from './LobbySettings'
import PlayerList from './lobby/PlayerList'
import Ready from './lobby/Ready'
import PlayerName from './lobby/PlayerName'

export default function Lobby(props) {
    //list of player names (given an array)
    //ready button
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [nicknameList, setNicknameList] = useState([]);
    const [nickname, setNickname] = useState('');
    const [isLeader, setIsLeader] = useState(false);
    const [gameSelect, setGameSelect] = useState("");

    const genNickname = () => {
        // TODO: change this so that they are readable
        let alph = 'abcdefghijklmnopqrstuvwxyz';
        var result = '';
        for (let i = 0; i < 10; i++) {
            result += alph.charAt(Math.floor(Math.random() * alph.length));
        }
        return result;
    }

    function onSuccessfulRoomJoin() {
        setSuccess(true);
        
        socket.emit('requestNicknameList');
        socket.emit('requestLeader');
        socket.emit("requestSelectedGame");

        socket.on('updateNickname', (msg) => {
            setNicknameList(msg['nicknames']);
        })
        socket.on('updateLeader', (msg) => {
            setIsLeader(msg['isLeader']);
        })
        socket.on('updateGameSelect', (msg) => {
            setGameSelect(msg['game']);
        })
    }

    useEffect(() => {
        var pth = window.location.pathname;
        var newNickname = genNickname();

        socket.emit('roomRequest', {
            'nickname': newNickname,
            'roomID': pth.split('/').pop()
        });

        socket.on('roomRequestResult', (msg) => {
            console.log(msg);
            if (msg['result'] == 'failure') {
                setErrorMessage(msg['message']);
            } else {
                setNickname(newNickname)
                onSuccessfulRoomJoin(newNickname);
            }
        })

    }, []);

    useEffect(() => {
        if(success == false) return;
        socket.emit('setNickname', {
            'newName': nickname
        })
        socket.emit('requestNicknameList')
    }, [nickname]);

    useEffect(() => {
        if(success == false) return; 
        socket.emit('setSelectedGame', {
            'game': gameSelect
        })
    }, [gameSelect])

    return success ? (
        <div className="flex flex-col space-y-2 justify-center bg-[#343a44] w-screen h-screen">
            <div className="flex flex-row justify-center space-x-2">
                <div className="w-1/2">
                    <LobbySettings isLeader={isLeader} gameSelect={gameSelect} setGameSelect={setGameSelect} />
                </div>
                <div className="flex flex-col space-y-2 w-1/4 h-screen">
                    <div>
                        <PlayerName name={nickname} setNickname={setNickname} />
                    </div>
                    <div className="grow">
                        <PlayerList content={nicknameList} />
                    </div>
                    <div>
                        {/*Change name to StartReady*/}
                        <Ready isLeader={isLeader} />
                    </div>
                </div>


            </div>
        </div>
    ) : ( <Homepage error={true} message={errorMessage} /> )
}
