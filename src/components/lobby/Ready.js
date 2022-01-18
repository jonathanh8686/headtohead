import React, { useState } from 'react';

export default function Ready(props){
    return props.isLeader ? (
        <div className = "flex-1 bg-[#FFFFFF] rounded-2xl p-2">
            <button>  start! </button>
        </div>
    ) : (
        <div className = "flex-1 bg-[#FFFFFF] rounded-2xl p-2">
            ready!
        </div>
    )
}