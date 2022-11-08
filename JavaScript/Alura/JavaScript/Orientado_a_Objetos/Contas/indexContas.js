/// Aqui está as anotações do projeto.
import { Cliente } from "../Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { ContaSalario } from "./ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309) // Criação da variável com as informações do cliente.

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001) // Criação da variável com as informações da conta.
contaCorrenteRicardo.depositar(500) // Vai depositar 500 reais na conta.
contaCorrenteRicardo.sacar(100) // Vai sacar 100 reais da conta.

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001) // Aqui é a mesma coisa da Conta Corrente, só que sendo Poupança.
contaPoupanca.sacar(10)

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario)
console.log(contaCorrenteRicardo)
console.log(contaPoupanca)

/// Para colocar códigos em outros arquivos js e usá-los como se fosse um só tem que usar o import, mas só vai funcionar se a página principal for um módulo.
/// Para criar um módulo é só dar um npm init e colocar as informações do projeto, depois da um export nas página e importa na principal.
/// instanceof serve para testar se um objeto é uma instância de um tipo específico de uma class, subclass ou interface.
/// Classe abstratas só podem ser herdadas por outras.
/// Métodos abstratos devem ser sobreescritos pelas classes filhas.