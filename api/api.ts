import axios from 'axios';
import {BASE_URL} from "@/environment";

const API = axios.create({
    baseURL: BASE_URL, // Replace with your base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProfile = async () => {

    try {
        const response = await API.get('/auth/profile');
        return response.data;
    } catch (error) {

        throw new Error('No se pudo obtener el perfil', );
    }
};

export default API;
