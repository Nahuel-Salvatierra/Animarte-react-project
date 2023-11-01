import axios from "./config.axios";

export function createProducts() {
    const res = axios.post('/product')
    return res.data;
}

