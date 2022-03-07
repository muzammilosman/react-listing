import axios from "axios"
import { api } from "./config"

const baseURL = process.env.REACT_APP_HOST_URL

export const getRestaurants = (searchKey = '') => {
    return axios.get(`${baseURL}${api.restaurants}`, {params: {searchQuery: searchKey}});
}

export const createRestaurant = (restaurantBody) => {
    return axios.post(`${baseURL}${api.restaurants}`, restaurantBody);
}