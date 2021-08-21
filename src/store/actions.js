import ServicoSeguranca from '../services/servicoSeguranca';

export default{
    login({ commit }, usuario) {
        return ServicoSeguranca.login(usuario).then(
          resposta => {

            console.log("Usuario: ", resposta.data.nome)
            console.log("Token: ", resposta.data.token)

            commit('loginSucesso', {
                usuario: resposta.data.nome,
                token: resposta.data.token
            });

            return Promise.resolve(usuario);
          },

          error => {
            commit('loginFailure');
            return Promise.reject(error);
          }
        );
    }
}  