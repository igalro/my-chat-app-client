import axios from "axios";
import config from "../../config/config";
import {headers} from "../../helpers/headers";

export function userMessages(userId, messages) {
    axios.post(config.ormUrl + 'chat',{userId: userId, messages: messages},
        {
            headers: headers
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
