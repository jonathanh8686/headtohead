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

        <div className="flex-col-1 flex-col space-y-2">
            <div>
                <MyTextField id="outlined-basic" label="room id" variant="outlined" onChange={changeRV} InputLabelProps = {{className : "text-white"}}/>
            </div>

            <div>
                <Button className="bg-[#115D7E]" variant="contained" onClick={sendToRoom}>join room</Button>
            </div>
        </div>
    )
}
