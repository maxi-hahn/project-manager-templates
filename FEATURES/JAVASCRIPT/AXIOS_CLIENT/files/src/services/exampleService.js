import axiosClient from '../api/axiosClient'


// ============================================================
// SERVICIO DE EJEMPLO
// ============================================================
// Muestra cómo usar axiosClient para hacer peticiones.
//
// Uso:
//     import { getExample } from '../services/exampleService'
//     const data = await getExample()
// ============================================================


export const getExample = async () => {
    const response = await axiosClient.get('/example')
    return response.data
}


export const postExample = async (payload) => {
    const response = await axiosClient.post('/example', payload)
    return response.data
}