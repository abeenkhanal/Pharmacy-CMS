import axios from 'axios';

export const UseAxiosPrivate = () => {
    const axiosPrivate = axios.create({
        baseURL: `${import.meta.env.BACKEND_URL}`, 
    });
    return axiosPrivate;
}

