import React, {useState} from 'react';
import styles from './styles.module.scss'
import Button from '@mui/material/Button';
import Input from "../../Generic/Input";
import TelegramLogo from "../../../static/icons/telegram-brands.svg";
import ErrorMessage from "../../Generic/ErrorMessage";
import {loginUser} from "../../../api/Frontend/auth";


const LoginPage = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        }).catch(() => setError(true));
        setToken(token);
    }

    return (
        <div className={styles.loginPage}>
            <h1>Telegram</h1>
            <img className={styles.telegramLogo} src={TelegramLogo} alt/>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <h3>Login to Telegram</h3>
                <Input type={"Email"} onChange={e => setEmail(e.target.value)} label={"Email"} value={email}/>
                <Input type={"Password"} onChange={e => setPassword(e.target.value)} label={"Password"} value={password}/>
                {error && <ErrorMessage errorMessage={"Wrong Email or Password"}/>}
                <p>Not registered yet? click here <a href={'/register'}> Register </a> </p>
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginPage;
