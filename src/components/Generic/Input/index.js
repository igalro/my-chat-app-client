import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({onChange, label, type, value}) => {
    return (
        <TextField
            required
            id="outlined-required"
            label= {label}
            onChange={onChange}
            type={type}
            value={value}
        />
    )
}

export default Input;