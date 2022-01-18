import React from 'react'
import Title from './navbar/Title'
import About from './navbar/About'

export default function TitleBar(props) {
    return (
        <div className="flex gap-4 h-20 bg-[#282c34] justify-center text-center align-text-middle">
            <div className="w-5/12"><Title /></div>

        </div>
    )
}
