import React, { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import StarIcon from '@mui/icons-material/Star';

export default function PlayerList(props){
    const leaderEntry = (nickname, key) => {
        console.log(`leader entry generated nickname:${nickname} index:${key}`);
        return (
            <div className="flex bg-[#FFFFFF] hover:bg-[#DADADA] w-full" key={key}>
                <div className="w-11/12">{nickname}</div>
                <StarIcon className="w-1/12"/>
            </div>
        )
    }
    const otherEntry = (nickname, key) => {
        console.log('other entry generated');
        return (
            <div className="flex bg-[#FFFFFF] hover:bg-[#DADADA]" key={key}>
                <div className="w-11/12">{nickname}</div>
                <KeyboardDoubleArrowUpIcon/>
            </div>
        )
    }
    
    return(
        <div className ="flex-col-1 h-full w-full bg-[#FFFFFF] rounded-2xl p-2">
            {props.content.map((nickname,index) => 
                (index === 0) ? leaderEntry(nickname,index) : otherEntry(nickname,index)
            )}
            
            
        </div>
    )
}