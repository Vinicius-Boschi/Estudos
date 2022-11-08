import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta { // Esse extends funciona como herança, ele vai pegar todas as informações do Conta.js e vai usar aqui.
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }

    sacar(valor) {
        let taxa = 1.02
        return this._sacar = (valor,taxa)
    }
}