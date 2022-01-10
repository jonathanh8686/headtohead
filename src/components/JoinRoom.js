import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import socket from '../Socket'

export default function Joinroom(props) {
    const MyTextField = styled(TextField)({
        '& .MuiOutlinedInput-root':{
            '&.Mui-focused fieldset': {
                borderColor: '#147199',
            },
        },
    });

    
    useEffect(() => {
        console.log(props);
        socket.on("test", (msg) => {
            console.log(msg);
        });
    }, []);
    
    

    

    const test = () => socket.emit('test', {
        'id': 'hi',
        'room': 'boom'
    })

    return (
        
        <div className = "flex-col-1 flex-col space-y-2">
            <div>
                <MyTextField id="custom-mine" variant="outlined" label="name"  InputLabelProps = {{className : "text-white"}}/>
            </div>
            <div>
                <MyTextField id="outlined-basic" label="room id" variant="outlined" InputLabelProps = {{className : "text-white"}}/>
                </div>
            <div>
                <Button className="bg-[#115D7E]" variant="contained" onClick={test}>join room</Button>
            </div>
            
        </div>
    )
}
