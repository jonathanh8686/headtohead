import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import StarIcon from '@mui/icons-material/Star';

export default function PlayerList(props){
    const playerEntry = (nickname, isLeader) =>  {
        return (
            <div className="flex bg-[#FFFFFF] hover:bg-[#DADADA]" key={nickname}>
                <div className="w-11/12">{nickname}</div>
                {isLeader ? <StarIcon className="w-1/12"/> : <KeyboardDoubleArrowUpIcon/>}
            </div>
        )
    }
    
    return(
        <div className ="flex-col-1 h-full w-full bg-[#FFFFFF] rounded-2xl p-2">
            {
                props.content.map((nickname,index) => playerEntry(nickname, index === 0))
            }
        </div>
    )
}