import React from 'react'
import Alert from '@mui/material/Alert'

export default function RoomAlert(props) {
    

    return (props.error) ? (
        
        <Alert variant="filled" severity="error"> Invalid Room ID </Alert>
    ) : ''
}
