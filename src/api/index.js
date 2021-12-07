import axios from "axios";
export default class Request {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    get(path, config){
        return axios.get(this.serviceUrl + path, {headers: Request.getHeaders(), ...config}).then(Request.getResData)
    }

    post(path, body, config){
        return axios.post(this.serviceUrl + path, body, {headers: Request.getHeaders(), ...config}).then(Request.getResData)
    }

    put(path, body){
        return axios.put(this.serviceUrl + path, body, {headers: Request.getHeaders()}).then(Request.getResData)
    }

    delete(path, body){
        return axios.delete(this.serviceUrl + path, {headers: Request.getHeaders(), data: body}).then(Request.getResData)
    }

    static getResData(res){
        return res.data;
    }
}
