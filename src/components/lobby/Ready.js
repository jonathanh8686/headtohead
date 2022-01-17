import React, { useState } from 'react';

export default function Ready(props){
    var settings = "flex-1 bg-[#FFFFFF] rounded-2xl p-2"
    return props.isLeader ? (
        <div className = {settings}>
            <button>  start! </button>
           
        </div>
    ) : (
        <div className = {settings}>
            ready!
        </div>
    )
}