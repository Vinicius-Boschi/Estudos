// Ser autenticavel significa ter o método autenticar.

export class SistemaAutenticacao { //Aqui que ele vai verificar se a senha colocada é a mesma que a empresa tem salva.
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.eAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha) // Se a senha for a mesma, ele vai retornar ela lá pro login.
        }
        return false
    }

    static eAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function // Se o autenticar estiver dentro do autenticavel e o autenticavel for uma instância de função ele retorna.
    }
}