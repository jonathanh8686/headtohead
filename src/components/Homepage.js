import React from 'react'
import Navbar from './Navbar'
import Joinroom from './JoinRoom'

export default function Homepage(props) {
    
    var settings = "flex-col-1 bg-[#343a44]"
    return (
        <div className={settings}>
            <Navbar/>
            <div className = "min-h-screen  text-center mt-5">
                <Joinroom/>
            </div>
        </div>
    )
}
