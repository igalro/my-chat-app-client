import axios from "axios";
import config from "../../config/config";
import {headers} from "../../helpers/headers";

export async function loginUser(credentials) {
    const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: headers["Content-Type"],
        body: JSON.stringify(credentials)
    })
    return await res.json()
}

export function registerUser(username, email, password) {
    axios.post(config.frontendServerUrl + 'auth/register',{username: username, email: email, password: password},
        {
            headers: headers
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
