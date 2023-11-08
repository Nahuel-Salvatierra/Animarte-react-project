import axios from "./config.axios";

export function createProducts() {
    const res = axios.post('/product')
    return res.data;
}

export async function login(data) {
    const dataSend = JSON.stringify(data)
    const res = await axios.post('/auth/login', dataSend,
        {
            headers: { 'Content-Type': 'application/json' },
        }
    )
    return res.data
}

export async function signUp(data) {
    const dataSend = JSON.stringify(data)
    const res = await axios.post('/auth/signup', dataSend,
        {
            headers: { 'Content-Type': 'application/json' },
        })

    return res.data
}

export async function getRefreshToken(){
    return await axios.get('auth/refresh',);
} 


