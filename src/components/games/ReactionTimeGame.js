import { React, useState, useEffect } from 'react'
import socket from '../../Socket'

export default function ReactionTimeGame() {
    const [isGreen, setIsGreen] = useState(false);
    const [greenTime, setGreenTime] = useState(undefined);
    const [score, setScore] = useState(0);

    socket.on('reactionTimeStart', () => {
        setIsGreen(true);
        setGreenTime(Date.now());
    });

    socket.on('resetReactionTime', () => {
        setIsGreen(false);
    });

    useEffect(() => {
        return () => {
            setIsGreen(false);
            setGreenTime(undefined);
        }
    }, []);

    return (
        <div className='flex justify-center items-center h-full'>
            <button
                className={(isGreen ? "bg-munsellgreen" : "bg-skyblue") + " w-1/2 h-1/2 rounded-xl drop-shadow-2xl text-7xl font-[Bebas_Neue] p-5"}
                onMouseDown={() => {
                    setScore(score + (Date.now() - greenTime));
                    socket.emit("reactionTimeResult", {
                        "score": score,
                    });
                }}>
                {isGreen ? "Go!" : "Click once green..."}
            </button>
        </div>
    )
}
