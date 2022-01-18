import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import socket from '../Socket'

export default function Joinroom(props) {
    const MyTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#147199',
            },
        },
    });

    var roomValue = "";

    const changeRV = e => {
        roomValue = e.target.value;
    };

    const sendToRoom = () => {
        console.log(window.location.href + roomValue)
        window.open(`${window.location.origin}/room/${roomValue}`, '_self');
    };

    return (

         <div className="flex-col-1 flex-col space-y-2 border-2 border-slate-300 p-8 bg-white shadow-2xl rounded-xl">
            <div>
                <MyTextField id="outlined-basic" label="Room ID" variant="outlined" onChange={changeRV} InputLabelProps = {{className : "text-celadonblue"}}/>
            </div>

            <div>
                <Button className="bg-celadonblue" variant="contained" onClick={sendToRoom}>join room</Button>
            </div>
        </div>
    )
}
