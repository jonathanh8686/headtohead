import React, { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import StarIcon from '@mui/icons-material/Star';
//import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function PlayerList(props){
    var settings = "flex-col-1 h-full w-full bg-[#FFFFFF] rounded-2xl p-2"
    const leaderEntry = (nickname, key) => {
        console.log(`leader entry generated nickname:${nickname} index:${key}`);
        return (
            <div className="flex bg-[#FFFFFF] hover:bg-[#DADADA]" key={key}>
                <div>{nickname}</div>
                <StarIcon/>
            </div>
        )
    }
    const otherEntry = (nickname, key) => {
        console.log('other entry generated');
        return (
            <div className="flex bg-[#FFFFFF] hover:bg-[#DADADA]" key={key}>
                <div>{nickname}</div>
                <KeyboardDoubleArrowUpIcon/>
            </div>
        )
    }
    
    return(
        <div className = {settings}>
            {/*props.content.map((nickname,index) => {
                (index == 0) ? leaderEntry(nickname,index) : otherEntry(nickname,index);
            })*/}
            {props.content.map(nickname=> <div key={nickname}>{nickname}</div>)}
            
            
        </div>
    )
}