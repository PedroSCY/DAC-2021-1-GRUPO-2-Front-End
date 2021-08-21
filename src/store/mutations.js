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
  },

  loginSucesso(state, { usuario, token}) {
    console.log("Mutations - login sucesso - usuario: ", usuario)
    console.log("Mutations - login sucesso - token: ", token)

    state.logado = true;
    state.usuario = usuario;
    state.token = token;
  },
  
  loginFailure(state) {
    state.logado = false;
    state.usuario = null;
    state.token = null;
  },
  
  logout(state) {
    state.logado = false;
    state.user = null;
    state.token = null;
  }
}