import {http} from './configuracoes'

export default{
    lista:() => {return http.get("fornecedor/listar")},
    adiciona:(fornecedor) => {return http.post("fornecedor/criar",fornecedor)}
}
