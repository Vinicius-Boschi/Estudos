// Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) { // Aqui ele dá um aviso que é pra você não criar uma conta com esse nome.
            throw new Error("Você não deveria instanciar um objeto do tipo conta, pois ela é uma classe abstrata.") // Vai mostrar o erro igual o console.log.
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor) { // Função que vai proteger o nome do cliente. Aqui vai fazer com que só mostre o nome do cliente, se for passado realmente o nome de um, senão ele retorna com undefined.
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor // O underline aqui serve para mostrar que esse saldo é privado e ninguém deveria estar mexendo nele.
        }
    }

    get cliente() { // Serve para pegar só o cliente, não mostrando saldo, nem conta bancária, apenas nome e cpf.
        return this._cliente
    }

    get saldo() { // Aqui ele vai mostrar apenas o saldo do cliente.
        return this._saldo;
    }

    // Método abstrato
    sacar(valor) { 
        throw new Error("O método sacar da conta é abstrato.")
    }

    _sacar(valor, taxa) { // Função de saque da conta, mas com uma taxa.
        const valorSacado = taxa * valor

        if(this._saldo >= valorSacado) {// Se o valor de saque for maior que o saldo da conta, não será possível efetuar o saque.
            this._saldo -= valorSacado
            return valorSacado // Vai mostrar o valor que foi sacado da conta.
        }

        return 0 // Vai retornar 0 se não for possível sacar nada.
    }

    depositar(valor) { // Função de depósito da conta.
        this._saldo += valor
    }

    transferir(valor, conta) { // Função para transferir dinheiro para outra conta.
        const valorSacado = this.sacar(valor) // Aqui ele saca o valor desejado da conta.
        conta.depositar(valorSacado) // Aqui ele deposita o valor sacado na conta.
    }
}