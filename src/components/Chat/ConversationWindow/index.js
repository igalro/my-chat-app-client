import React, {useState} from 'react';
import styles from './styles.module.scss'
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import {InputBase} from "@mui/material";
import useChat from "../../../hooks/useChat";
import {useParams} from "react-router-dom";

const ConversationWindow = () => {

    const { userId } = useParams();
    const {messages, sendMessage} = useChat(userId);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <>
        <div className={styles.chatContainer}>
            <div className={styles.messagesContainer}>
                <li className={styles.messagesList}>
                    {messages.map((message, i) => (
                        <li key={i}
                            className={`message-item ${message.ownedByCurrentUser ? styles.myMessage : styles.receivedMessage}`}>
                            {message.body}
                        </li>
                    ))}
                </li>
            </div>
        </div>
            <div className={styles.sendMessages}>
                <InputBase sx={{flex: 1,ml: "1" ,backgroundColor: "white" }}
                           placeholder="Write a message..."
                           value={newMessage}
                           onChange={event => setNewMessage(event.target.value)}
                />
                <IconButton color="primary"
                            type="submit"
                            sx={{marginLeft: "-3rem", backgroundColor: "white" }}
                            aria-label="search"
                            onClick={handleSendMessage}
                >
                    <SendIcon />
                </IconButton>
            </div>
        </>
    )
}

export default ConversationWindow;