import React from 'react'
import ReactionTimeGame from '../games/ReactionTime/ReactionTimeGame'
import LobbySettings from './LobbySettings'
import WaitingRoom from './WaitingRoom'

export default function LobbyContent(props) {
    if (props.status == "lobby") {
        return (
            <div className='h-screen bg-white rounded-2xl p-2'>
                <LobbySettings isLeader={props.isLeader} gameSelect={props.gameSelect} setGameSelect={props.setGameSelect} />
            </div>
        )
    } else if (props.status == 'in game') {
        if (props.gameSelect == "ReactionTime") {
            return (
                <div className='h-full bg-white rounded-2xl p-2'>
                    <ReactionTimeGame></ReactionTimeGame>
                </div>
            )
        }
        else {
            return (
                <h1>somehow a game started with no selected game</h1>
                // give some error page here
            )
        }
    } else if (props.status == 'waiting') {
        return (
            <div className='h-screen bg-white rounded-2xl p-2'>
                <WaitingRoom></WaitingRoom>
            </div>
        )

    }
}
