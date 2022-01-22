import { React, useState, useEffect } from 'react'
import socket from '../../Socket'

export default function ReactionTimeGame() {
    const [isGreen, setIsGreen] = useState(false);
    const [greenTime, setGreenTime] = useState(undefined);
    const [showButton, setShowButton] = useState(true);
    const [score, setScore] = useState(0);
    const [falseStarted, setFalseStarted] = useState(false);
    const [doubleFalseStarted, setDoubleFalseStarted] = useState(false);

    socket.on('reactionTimeStart', () => {
        setIsGreen(true);
        setGreenTime(Date.now());
    });

    useEffect(() => {
        return () => {
            setIsGreen(false);
            setGreenTime(undefined);
        }
    }, []);

    return (
        <div className='flex justify-center items-center h-full'>
            {showButton ?
                (
                    <button
                        className={(isGreen ? "bg-munsellgreen" : "bg-skyblue") + " w-1/2 h-1/2 rounded-xl drop-shadow-2xl text-7xl font-[Bebas_Neue] p-5"}
                        onMouseDown={() => {
                            if(!isGreen) {
                                if(!falseStarted) {
                                    setFalseStarted(true);
                                } else {
                                    setDoubleFalseStarted(true);
                                    setScore(9999);
                                    setShowButton(false);
                                }
                                return;
                            }
                            setScore(Date.now() - greenTime);
                            socket.emit("reactionTimeResult", {
                                "score": score,
                            })
                            setShowButton(false);
                        }}>
                        {isGreen ? "Go!" : "Click once green..."}
                        <span className='text-2xl'>
                            <br></br>
                            {falseStarted && !isGreen ? "You false started! The next false start will disqualify you!" : ""}
                        </span>
                    </button>
                ) :
                (
                    <div className={(doubleFalseStarted ? 'bg-honey' : 'bg-cornflowerblue') + ' grid justify-items-center items-center w-1/2 h-1/2 rounded-xl drop-shadow-2xl text-7xl font-[Bebas_Neue] p-5'}>
                        {doubleFalseStarted ? "You were disqualified for a double false start!" : (score + " ms")}
                    </div>
                )
            }
        </div>
    )
}
