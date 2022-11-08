export class Funcionarios {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1
        this._senha
    }

    autenticar(senha) {
        return senha == this._senha
    }

    cadastrarSenha(senha) { // Serve pra criar a senha.
        this._senha = senha
    }
}