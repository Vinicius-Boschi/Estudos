import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{ // Criação da classe com as informações da conta e função de saque.
    static numeroDeContas = 0 // Aqui ele vai manter o valor original da quantidade de contas, sem adicionar números sem necessidades. 

    constructor(cliente, agencia) { // Função que vai mostrar todos os dados dos cliente como, cpf, nome, conta bancária, dinheiro na conta e a quantidade de contas.
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1 // Aqui que ele vai mostrar a quantidade de contas.
    }

    // Sobreescreve o comportamento do sacar.
    sacar(valor) { // Vai sacar o valor da conta, mas com uma taxa.
        let taxa = 1.1
        return this._sacar(valor, taxa) 
    }
}