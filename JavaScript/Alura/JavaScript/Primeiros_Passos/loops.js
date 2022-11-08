console.log(`\n Trabalhando com condicionais`)

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`) // Array contendo todas as cidades.

const idadeComprador = 19
const estaAcompanhado = false
let temPassagemComprada = false
const destino = "São Paulo"

console.log("\n Destinos possíveis: ")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true

let contador = 0
let destinoExiste = false

while(contador < 3) { // Enquanto for menor que 3 ele vai rodar o código.
    if(listaDeDestinos[contador] == destino) { // Mostra se existe a cidade na variável ou não.
        destinoExiste = true // Verifica se o destino realmente existe.
        break // Para o while se achar o destino.
    }
    contador +=1 // Ele soma o contador mais um, assim ele não entra em um loop infinito mostrando apenas uma única cidade, e sim todas que estão no array.
}

console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem")
} else {
    console.log("Desculpe, tivemos um erro!")
}

for(let i = 0; i < 3; i++) {
    // Primeiro inicia a variável, Segundo ele verifica a condição de cada loop, Terceiro é oque ele vai executar no final de cada loop. 
    if(listaDeDestinos[i] == destino) { 
        destinoExiste = true 
    }
}