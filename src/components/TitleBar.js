import React from 'react'
import Title from './navbar/Title'
import About from './navbar/About'

export default function TitleBar(props) {
    var settings = "flex gap-4 h-20 bg-[#282c34] justify-center text-center align-text-middle"

    return (
        <div className = {settings}>
            <div className="w-5/12"><Title/></div>
            
        </div>
    )
}
