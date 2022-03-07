
import axios from "axios";
import { api } from "./config";

const baseURL = process.env.REACT_APP_HOST_URL


export const login = (loginBody) => {
    return axios.post(`${baseURL}${api.auth.login}`, loginBody);
}

export const register = (userBody) => {
    return axios.post(`${baseURL}${api.auth.register}`, userBody);
}