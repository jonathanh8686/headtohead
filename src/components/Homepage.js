import React from 'react'
import Navbar from './Navbar'
import Joinroom from './JoinRoom'
import {useParams} from 'react-router-dom'
import Alert from '@mui/material/Alert'
import RoomAlert from './RoomAlert'

export default function Homepage(props) {
    
    return (
        <div className="min-h-screen flex-col bg-[#343a44]">
            <div><Navbar/></div> 
            {/* TODO: rename navbar */}
            <div className="text-center mt-5">
                <Joinroom/>
            </div>
            <div className=""><RoomAlert error={props.error} message={props.message}/></div>
        </div>
    )
}
