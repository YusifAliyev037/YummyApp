import axios from "axios";

const baseURL = "/api"


const instanceAxios = axios.create({
    baseURL,
    headers:{
        Accept:"application/json"
    }
})