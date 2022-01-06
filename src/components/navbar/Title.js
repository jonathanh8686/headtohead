import React, { useState } from 'react';


export default function Title(props) {
    var settings = "text-7xl h-20 line-height:1 bg-[#115D7E] text-white hover:text-black"
    var lightmode = true
    return (
        <div className={lightmode ? settings : settings}>
            Head to Head!
        </div>
    )
}
