import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosInstance;