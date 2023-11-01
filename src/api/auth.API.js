import axios from "./config.axios";

export function createProducts() {
    const res = axios.post('/product')
    return res.data;
}

export async function signUp() {
    const res = await axios.post('/auth/signup')
    return res.data
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


