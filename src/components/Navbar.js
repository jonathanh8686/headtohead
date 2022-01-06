import React from 'react'
import Title from './navbar/Title'
import About from './navbar/About'

export default function Navbar(props) {
    var settings = "flex gap-4 grid-cols-7 h-20"

    return (
        <div className = {settings}>
            <div className="flex-auto w-200"><Title/></div>
            <div className="flex-auto"></div>
            <div className="flex-auto"></div>
            <div className="flex-auto"></div>
            <div className="flex-auto w-28"><About/></div>
        </div>
    )
}
