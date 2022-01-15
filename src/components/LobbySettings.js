import React, { useState } from "react";

export default function LobbySettings(props) {
    var settings = "flex-row h-screen justify-center bg-[#FFFFFF] rounded-2xl p-2"
    var buttonSettings = "bg-transparent hover:bg-blue-500 focus:bg-blue-500 focus:text-white active:bg-violet-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    
    var games = ["game1", "game2", "game3"]

    const gameButton = (gameName) => {
        return (
            <button class={buttonSettings}>
                {gameName}
            </button>
        )
    }

    const gameDisplay = (gameName) => {
        return(
            <div className="bg-blue-500">
                {gameName}
            </div>
        
        )
    }
    
    return (
        <div className = {settings}>
            {games.map((game) => props.isLeader ? gameButton(game):gameDisplay(game))}
        </div>
    )
}
