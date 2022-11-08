export class Cliente { // Criação da classe com as informações do cliente.
    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf, senha) {
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }

    autenticar() {
        return true
    }
}