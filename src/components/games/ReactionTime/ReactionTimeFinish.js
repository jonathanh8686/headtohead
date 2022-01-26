import React from 'react'
import Scoreboard from './Scoreboard'
import RestartButton from './RestartButton'

export default function ReactionTimeFinish(props) {
    

    return (
        <div className="flex flex-col items-center justified-center h-full">
            <div className="flex flex-col h-1/2 mt-20 w-1/2 p-8 items-center border-2 border-slate-300 gap-y-5">
                <Scoreboard info={props.info}/>
                <div className="flex flex-row gap-x-5">
                    <div className='w-1/3 border-2 border-slate-300'>
                    <button >
                        lobby
                    </button>
                    </div>
                    <div className='w-1/3'>
                    <RestartButton restartFunction={props.restartFunction}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
