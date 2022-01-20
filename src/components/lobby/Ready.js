import React, { useState } from 'react';

export default function StartReady(props){
    return props.isLeader ? (
        <div className = "flex-1 bg-munsellgreen rounded-2xl p-2 text-center">
            <button onClick={() => {
                props.gameStart();
            }}>
                Start
            </button>
        </div>
    ) : (
        <div className = "flex-1 bg-skyblue rounded-2xl p-2 text-center">
            ready!
        </div>
    )
}