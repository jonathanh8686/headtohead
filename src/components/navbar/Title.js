import React, { useState } from 'react';


export default function Title(props) {
    var settings = "text-5xl h-20 line-height:1 bg-[#115D7E] text-white hover:bg-[#147199] rounded-2xl align-text-middle"
    var lightmode = true
    return (
        <div className={settings}>
            Head to Head!
        </div>
    )
}
