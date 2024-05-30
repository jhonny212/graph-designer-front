import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_BACKEND

export const request = axios.create({
    baseURL: BACKEND_URL, // La URL base de tu API
    timeout: 5000, // Tiempo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
    }
});

