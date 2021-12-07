import React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';

const SearchUser = ({user, setUserSearch}) => {
    return (
        <Paper
            //component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%"}}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
        </IconButton>
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={user}
        onChange={e => setUserSearch(e.target.value)}
    />
        </Paper>
    )
}

export default SearchUser;