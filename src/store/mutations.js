export default{
  ADICIONA_FORNECEDOR:(estado, valor) => {
    estado.fornecedores.push(valor)
  },

  REMOVE_FORNECEDOR:(estado, valor) => {
    //var indice = estado.fornecedores.indexOf(valor)
    //estado.fornecedores.splice(indice, 1)

    estado.fornecedores = estado.fornecedores.filter((fornecedor) => fornecedor.id != valor.id ) 

  },
  
  ATUALIZA_FORNECEDOR:(estado, valor) => {
    var indice = estado.fornecedores.indexOf(valor)
    estado.fornecedores.splice(indice, 1)
    estado.fornecedores.push(valor)
  }
}