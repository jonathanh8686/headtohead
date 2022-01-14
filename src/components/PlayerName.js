import React, { useState } from 'react';

export default function PlayerName(props){
    var settings = "flex-1 h-full w-full bg-[#FFFFFF] rounded-2xl"
    return(
        <div className = {settings}>
            {props.name}
        </div>
    )
}