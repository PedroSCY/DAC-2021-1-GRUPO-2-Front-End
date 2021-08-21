import { http } from './api'

export default{
    lista: () => { return http.get("/listar") },
    adiciona: (fornecedor) => { return http.post("/criar", fornecedor) }
}
