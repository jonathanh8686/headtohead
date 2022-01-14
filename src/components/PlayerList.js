import React, { useState } from 'react';

export default function PlayerList(props){
    var settings = "flex-col-1 h-full w-full bg-[#FFFFFF] rounded-2xl"
    return(
        <div className = {settings}>
            {props.content.map(nickname => <div>{nickname}</div>)}
        </div>
    )
}