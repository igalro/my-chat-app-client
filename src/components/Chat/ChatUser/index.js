import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SearchUser from "../SearchUser";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../../../config/config";
import {refreshPage} from "../../../helpers/functions/refreshPage";


const ChatUser = () => {

    const [users, setUsers] = useState([])
    const [userSearch, setUserSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let data ;
        axios.get(config.ormUrl + 'user/users')
            .then(res => {
                data = res.data;
                setUsers(data)
            }).catch(err => err)
    },[])


    const handleOnUserClick = (event) => {
        navigate('/chat/' + event.username);
        refreshPage()
    }

    const filteredUsers = users.filter(user => user.username?.toLowerCase().includes(userSearch.toLowerCase()))

    return (
        <List className={styles.usersList} sx={{ width: '100%', backgroundColor: 'background.paper' }}>
            <SearchUser user={userSearch} setUserSearch={setUserSearch} />
            {filteredUsers.map((user) => (
                <ListItem className={styles.listItem}>
                    <ListItem onClick={() => {handleOnUserClick(user)}}
                              alignItems="flex-start"
                              secondaryAction={"7.12.2021"}>
                        <ListItemAvatar>
                            <Avatar>I</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.username}
                            secondary={
                                <React.Fragment>
                                    <Typography variant="body2">
                                        {user.username} just joined Telegram
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </ListItem>
            ))}
        </List>
    )
}

export default ChatUser;
