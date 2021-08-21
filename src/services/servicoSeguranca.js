import { http } from './api'

class ServicoSeguranca {
    login(logindto){
        return http.post("seguranca/login", {
            login: logindto.login, 
            senha: logindto.senha 
        })
    }

    logout(){
        localStorage.removeItem('user');
    }
}
export default new ServicoSeguranca();