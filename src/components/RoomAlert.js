import React, {useState} from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

export default function RoomAlert(props) {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }
    return (props.error) ? (
        <Snackbar open={open} onClose={handleClose}>
            <Alert variant="filled" severity="error" onClose={handleClose}> {props.message} </Alert>
        </Snackbar>
        
    ) : ''
}
