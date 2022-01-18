import React, { useState } from "react";
import Lobby from "./Lobby";

export default function LobbySettings(props) {
    var games = ["game1", "game2", "game3"]

    const untoggledButton = (gameName) => {
        return (
            <button className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded" key={gameName}
                onClick={props.isLeader ? () => { props.setGameSelect(gameName) } : () => { }}>
                {gameName}
            </button>
        )
    }


    const toggledButton = (gameName) => {
        return (
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded" key={gameName}
                onClick={props.isLeader ? () => { props.setGameSelect('') } : () => { }}>
                {gameName}
            </button>
        )
    }

    const gameDisplay = (gameName) => {
        return (
            <div className="bg-blue-500">
                {gameName}
            </div>

        )
    }

    return (
        <div className="flex-row h-screen justify-center space-x-2 bg-[#FFFFFF] rounded-2xl p-2">
            {
                games.map((game) => game == props.gameSelect ?
                    toggledButton(game) :
                    untoggledButton(game))
            }
        </div>
    )
}
