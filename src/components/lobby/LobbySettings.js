import React from "react";

export default function LobbySettings(props) {
    var games = ["ReactionTime", "game2", "game3"]

    const gameButton = (gameName, toggled) => {
        return (
            <button className={(toggled ? "bg-blue-500 text-white" : "bg-transparent text-blue-700") + " font-semibold py-2 px-4 border border-blue-500 rounded"} key={gameName}
                onClick={() => {
                    if (!props.isLeader) return;
                    toggled ? props.setGameSelect('') : props.setGameSelect(gameName)
                }}>
                {gameName}
            </button>
        )
    }

    return (
        <div className="flex-row justify-center space-x-2 ">
            {
                games.map((game) => gameButton(game, game == props.gameSelect))
            }
        </div>
    )
}
