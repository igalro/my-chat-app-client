import React from "react";
import styles from './styles.module.scss'
import TelegramLogo from "../../../static/icons/telegram-brands.svg";
import {Link} from "react-router-dom";

export const RegistrationSuccess = ({}) => {
    return (
        <div className={styles.registerSuccess}>
            <h1>Telegram</h1>
            <img className={styles.telegramLogo} src={TelegramLogo} alt/>
            <h3>You have successfully registered to Telegram app</h3>
            <p>click here to start <Link to='/chat/0'>Chat</Link></p>
        </div>
    )
}

export default RegistrationSuccess;