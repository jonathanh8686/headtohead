import React from 'react'
import Navbar from './Navbar'
import Joinroom from './JoinRoom'
import {useParams} from 'react-router-dom'
import Alert from '@mui/material/Alert'
import RoomAlert from './RoomAlert'

export default function Homepage(props) {
    
    var settings = "flex-col bg-[#343a44]"
    //var {message} = useParams();
    

    return (
        <div className={settings}>
            <div><Navbar/></div>
            
            <div className="min-h-screen  text-center mt-5">
                <Joinroom/>
            </div>
            <div className=""><RoomAlert error={props.error} message={props.message}/></div>
            
            
        </div>
    )
}
