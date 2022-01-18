import React, { useState } from "react";
import Lobby from "./Lobby";

export default function LobbySettings(props) {
    var games = ["game1", "game2", "game3"]

    const gameButton = (gameName, toggled) => {
        return (
            <button className={(toggled ? "bg-blue-500 text-white" : "bg-transparent text-blue-700") + " font-semibold py-2 px-4 border border-blue-500 rounded"} key={gameName}
                onClick={() => {
                    if(!props.isLeader) return;
                    toggled ? props.setGameSelect('') : props.setGameSelect(gameName)
                }}>
                {gameName}
            </button>
        )
    }

    return (
        <div className="flex-row h-screen justify-center space-x-2 bg-[#FFFFFF] rounded-2xl p-2">
            {
                games.map((game) => gameButton(game, game==props.gameSelect))
            }
        </div>
    )
}
