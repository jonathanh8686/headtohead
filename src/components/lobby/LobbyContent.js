import React from 'react'
import LobbySettings from './LobbySettings'

export default function LobbyContent(props) {
    
    if(!props.active){
        return (
            <LobbySettings isLeader={props.isLeader} gameSelect={props.gameSelect} setGameSelect={props.setGameSelect}/>
        )
    } else {
        <div>game starting!</div>
    }
}
