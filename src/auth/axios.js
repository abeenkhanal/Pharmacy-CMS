import axiosLib from "axios";

const axiosInstance = axiosLib.create({
    baseURL: import.meta.env.VITE_API_URL,
});


export default axiosInstance;