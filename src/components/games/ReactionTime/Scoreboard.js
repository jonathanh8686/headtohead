import React, { useEffect, useState } from 'react'

export default function Scoreboard(props) {
    
    const empty = {1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''};
    const [scores, setScores] = useState({1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''});
    const [names, setNames] = useState({1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''});
    useEffect(() => {
        var temp = {1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''};
        var temp2 = {1 : '', 2: '', 3: '', 4: '', 5: '', 6 : '', 7 : '', 8 : '', 9 : '', 10 : ''};
        props.info.forEach((element, index) => { 
            temp[index + 1] = element[1];
            temp2[index + 1] = element[0];
        })
        setScores(temp);
        setNames(temp2);
        console.log(props.info)
    }, [props.info])
    const scoreEntry = (rank, val) => {
        return(
            <div key={rank} className="flex flex-row">
                <div className='w-1/12'> {rank} </div>
                <div className='w-7/12'> {val} </div>
                <div className='w-1/4'> {scores[rank]} </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-center h-5/6 border-2 w-full border-slate-300 text-center">
            <div className="h-1/6">score</div>
            
            <div className="flex flex-row">
                <div className="w-1/2">{ Object.entries(names).slice(0,5).map(([k,v]) => scoreEntry(k, v))}</div>
                <div className="w-1/2">{ Object.entries(names).slice(5,10).map(([k,v]) => scoreEntry(k, v))}</div>
            </div>
        </div>
    )
}
