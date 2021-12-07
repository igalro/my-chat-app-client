import React from 'react';
import styles from './styles.module.scss'
import ChatUser from "../../Chat/ChatUser";
import ConversationWindow from "../../Chat/ConversationWindow";

const ChatPage = ({}) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.chatContacts}>
                <ChatUser />
            </div>
            <div className={styles.chatConversation}>
                <ConversationWindow />
            </div>
        </div>
    )
}

export default ChatPage;