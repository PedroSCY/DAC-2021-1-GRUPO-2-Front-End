import axios from 'axios'

export const http = axios.create({
    baseURL:"http://localhost:8082/fornecedor",
    timeout: 10000
})