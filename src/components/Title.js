import React, { useState } from 'react';


export default function Title(props) {
    var settings = "text-9xl bg-[#115D7E] text-white"
    var lightmode = true
    return (
        <div className={lightmode ? settings : settings}>
            Head to Head!
        </div>
    )
}
