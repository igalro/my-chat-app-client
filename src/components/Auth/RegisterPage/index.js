import React, {useState} from 'react';
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom';
import Input from "../../Generic/Input";
import Button from "@mui/material/Button";
import TelegramLogo from '../../../static/icons/telegram-brands.svg'
import ErrorMessage from "../../Generic/ErrorMessage";
import {registerUser} from "../../../api/Frontend/auth";

const RegisterPage = ({}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
        if(reg.test(password)){
            setError(false)
            registerUser(username,email,password)
            navigate('/success')
        }
        else {
            setError(true)
        }
    }

    return (
        <div className={styles.registerPage}>
            <h1>Telegram</h1>
            <img className={styles.telegramLogo} src={TelegramLogo} alt/>
            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <h3>Register to telegram</h3>
                <div className={styles.inputBox}>
                <Input type={"text"} label={"Username"} value={username} onChange={e => setUsername(e.target.value)} />
                <Input type={"Email"} label={"Email"} value={email} onChange={e => setEmail(e.target.value)} />
                <Input type={"Password"} label={"Password"} value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {error && <ErrorMessage errorMessage={"Password must be at least 6 characters with one Uppercase letter"}/>}
                    <p>Already have an account ? click here to <a href={'/login'}> Login </a> </p>
                    <Button variant="contained" color="primary" type="submit">Register</Button>
            </form>
        </div>
    )
}

export default RegisterPage;
