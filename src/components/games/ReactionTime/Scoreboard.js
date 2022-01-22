import React from 'react'

export default function Scoreboard(props) {
    
    var scores = {1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''}

    const scoreEntry = (rank, val) => {
        return(
            <div className="flex flex-row">
                <div> {rank} </div>
                <div> {val} </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-center h-5/6 border-2 w-full border-slate-300 text-center">
            <div className="h-1/6">score</div>
            
            <div className="flex flex-row">
                <div className="w-1/2">{ Object.entries(scores).slice(0,5).map(([k,v]) => scoreEntry(k, v))}</div>
                <div className="w-1/2">{ Object.entries(scores).slice(5,10).map(([k,v]) => scoreEntry(k, v))}</div>
            </div>
        </div>
    )
}
