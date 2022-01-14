import { getThemeProps } from '@mui/system';
import React, { useState } from 'react';

export default function PlayerName(props){
    var settings = "flex-1 h-full w-full bg-[#FFFFFF] rounded-2xl p-2"
    const textChange = (e) => {
        let val = e.target.value;
        let regex = /^[0-9a-zA-Z]+$/;
        if(val.match(regex) || val === ""){
            props.setNickname(e.target.value);
        }
        
    }
    return(
        <div className = {settings}>
            <input 
                className={props.name.length <= 0 ? 'outline-0 border-2 border-red-700 rounded-md placeholder-red-800' : 'border-2'} 
                value={props.name} 
                maxLength='15' 
                onChange={textChange} 
                placeholder={props.name.length == 0 ? 'Error: empty name' : ''}>
                    
            </input>
            
        </div>
    )
}