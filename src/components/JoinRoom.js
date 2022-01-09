import React from 'react'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Joinroom(props) {
    const MyTextField = styled(TextField)({
        '& .MuiOutlinedInput-root':{
            '&.Mui-focused fieldset': {
                borderColor: '#147199',
            },
        },
    });

    return (
        <div className = "flex-col-1 flex-col gap-y-5">
            <div>
                <MyTextField id="custom-mine" variant="outlined" label="Name"  InputLabelProps = {{className : "text-white"}}/>
            </div>
            <div>
                <MyTextField id="outlined-basic" label="Room ID" variant="outlined" InputLabelProps = {{className : "text-white"}}/>
                </div>
            <div>
                <Button className="bg-[#115D7E]" variant="contained">Join Room</Button>
            </div>
            
        </div>
    )
}
