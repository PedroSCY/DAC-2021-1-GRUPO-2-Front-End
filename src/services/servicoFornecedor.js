import { http } from './api'
import store from "@/store"

class ServicoFornecedor{
    lista(){
        return http.get("fornecedor/listar")
    }
    adiciona(fornecedor){
        console.log("Store.state.token: ",store.state.token)
        console.log("Store.state.logado: ",store.state.logado)
        console.log("Store.state.usuario: ",store.state.usuario)
        return http.post("fornecedor/criar", fornecedor,
        {
            headers: { Authorization: 'Bearer ' + store.state.token }
        })
    }
    remove(id){
        console.log("Store.state.token: ",store.state.token)
        console.log("Store.state.logado: ",store.state.logado)
        console.log("Store.state.usuario: ",store.state.usuario)
        return http.delete(`fornecedor/deletar/${id}`, {
            headers: { Authorization: 'Bearer ' + store.state.token }
        })
    }
    atualiza(fornecedor){
        console.log("Store.state.token: ",store.state.token)
        console.log("Store.state.logado: ",store.state.logado)
        console.log("Store.state.usuario: ",store.state.usuario)
        return http.put(`fornecedor/atualizar/${fornecedor.id}`, fornecedor,
        {
            headers: { Authorization: 'Bearer ' + store.state.token }
        })
    }

}

export default new ServicoFornecedor();

// export default{
//     adiciona: (fornecedor) => { return http.post("/criar", fornecedor) },
//     remove: (id) => {return http.delete(`/deletar/${id}`) },
//     atualiza: (fornecedor) => { return http.put(`/atualizar/${fornecedor.id}`, fornecedor)}
// }
