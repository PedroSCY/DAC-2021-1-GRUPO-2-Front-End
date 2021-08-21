import { http } from './api'

export default{
    lista: () => { return http.get("/listar") },
    adiciona: (fornecedor) => { return http.post("/criar", fornecedor) },
    remove: (id) => {return http.delete(`/deletar/${id}`) },
    atualiza: (fornecedor) => { return http.put(`/atualizar/${fornecedor.id}`, fornecedor)}
}
