import { React, useState, useEffect } from 'react'
import socket from '../../../Socket'
import ReactionTimeFinish from './ReactionTimeFinish';


export default function ReactionTimeGame() {
    const [isGreen, setIsGreen] = useState(false);
    const [greenTime, setGreenTime] = useState(undefined);
    const [showButton, setShowButton] = useState(true);
    const [score, setScore] = useState(0);
    const [baseTime, setBaseTime] = useState(0);
    const [falseStartCount, setFalseStartCount] = useState(0);
    const [renderState, setRenderState] = useState('game');

    var scoreboardInfo = [];
    const falseStartPenalty = 50;

    function gameStart() {
        
        setBaseTime(0);
        setScore(0);
        setFalseStartCount(0);
        setRenderState('game');
        setIsGreen(false);

        socket.emit('startSelectedGame');
    }

    socket.on('reactionTimeStart', () => {
        setIsGreen(true);
        setGreenTime(Date.now());
    });

    socket.on('resetReactionTime', () => {
        setIsGreen(false);
        setShowButton(true);
    })

    socket.on('reactionTimeEnd', (msg) => {
        scoreboardInfo = msg['playerRankings']
        setRenderState('scoreboard');
        
    })
    useEffect(() => {
        return () => {
            setIsGreen(false);
            setGreenTime(undefined);
        }
    }, []);

    useEffect(() => {
        if(isGreen){
            setScore(baseTime + falseStartPenalty * falseStartCount);
            socket.emit("reactionTimeResult", {
                "score": baseTime + falseStartPenalty * falseStartCount,
            })
            setShowButton(false);
        }
    },[baseTime])

    if(renderState === 'game'){
        return (

            <div className='flex justify-center items-center h-full'>
                {showButton ?
                    (
                        <button
                            className={(isGreen ? "bg-munsellgreen" : "bg-skyblue") + " w-1/2 h-1/2 rounded-xl drop-shadow-2xl text-7xl font-[Bebas_Neue] p-5"}
                            onMouseDown={() => {
                                if(!isGreen) {
                                    //socket.emit('processFalseStart');
                                    setFalseStartCount(falseStartCount + 1);
                                    return;
                                }
                                
                                setShowButton(false);
                                setBaseTime(Date.now() - greenTime);
                                
                            }}>
                            {isGreen ? "Go!" : "Click once green..."}
                            
                        </button>
                    ) :
                    (
                        <div className='flex flex-col bg-cornflowerblue grid justify-items-center items-center w-1/2 h-1/2 rounded-xl drop-shadow-2xl text-7xl font-[Bebas_Neue] p-5'>
                            <div>{(score + " ms")}</div>
                            <div className='text-3xl'> 
                                <span className='text-green-500'> {baseTime} </span>
                                <span> + </span>
                                <span className='text-red-500'> {falseStartPenalty * falseStartCount} </span>
                                
                            </div>
                            
                        </div>
                    )
                }
            </div>
        )
    } else if (renderState === 'scoreboard') {
        return (
            <div className='h-full bg-white rounded-2xl p-2'>
                <ReactionTimeFinish info={scoreboardInfo} restartFunction={gameStart}></ReactionTimeFinish>
            </div>
        )
    }
}
