import axios from 'axios'

export const productAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export function crearProductos(){
    const res = productAPI.post('/product')
    return res.data;
}