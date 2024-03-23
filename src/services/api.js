import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_URL,
    timeout: 5000,
});