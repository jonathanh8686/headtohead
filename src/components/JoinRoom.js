import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Joinroom(props) {
    

    return (
        <div className = "flex-col-1 flex-col gap-y-5">
            <div>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </div>
            <div>
                <TextField id="outlined-basic" label="Room ID" variant="outlined" />
                </div>
            <div>
                <Button className="bg-[#115D7E]" variant="contained">Contained</Button>
            </div>
            
        </div>
    )
}
