import axios from 'axios'


// ============================================================
// CLIENTE AXIOS
// ============================================================
// Instancia configurada de Axios con interceptores.
//
// Uso:
//     import axiosClient from '../api/axiosClient'
//     const response = await axiosClient.get('/items')
// ============================================================

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})


// ============================================================
// INTERCEPTOR DE REQUEST
// ============================================================
// Agrega el token JWT al header Authorization si existe.
// ============================================================

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)


// ============================================================
// INTERCEPTOR DE RESPONSE
// ============================================================
// Maneja errores globalmente.
// Si el servidor responde 401, limpia el token.
// ============================================================

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            // TODO: redirigir al login según la lógica del proyecto
        }
        return Promise.reject(error)
    },
)


export default axiosClient