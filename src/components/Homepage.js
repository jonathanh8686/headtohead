import React from 'react'
import TitleBar from './navbar/TitleBar'
import Joinroom from './JoinRoom'
import {useParams} from 'react-router-dom'
import Alert from '@mui/material/Alert'
import RoomAlert from './RoomAlert'
import About from './About'

export default function Homepage(props) {
    
    return (
        <div className="min-h-screen flex flex-col items-center bg-azurewhite">
            <div><TitleBar/></div>
            <div className="text-center mt-5">
                <Joinroom/>
            </div>
            <div className="text-center fixed inset-x-0 bottom-0 m-3">
                <About/>
            </div>
            <div className=""><RoomAlert error={props.error} message={props.message}/></div>
        </div>
    )
}
