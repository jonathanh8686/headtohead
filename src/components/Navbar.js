import React from 'react'
import Title from './navbar/Title'
import About from './navbar/About'

export default function Navbar(props) {
    var settings = "flex gap-4 grid-cols-12 h-20 bg-[#282c34] text-center align-text-middle"

    return (
        <div className = {settings}>
            <div className="flex-auto basis-5/12"><Title/></div>
            <div className="flex-auto basis-6/12"></div>
            <div className="flex-auto basis-1/12"><About/></div>
        </div>
    )
}
