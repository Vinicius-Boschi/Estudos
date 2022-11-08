console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

listaDeDestinos.push(`Curitiba`) // push é a função que adiciona itens em um array.

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

listaDeDestinos.splice(0, 2) // splice é a função para remover itens de um array. 0 é a onde ele inicia pra remover e o 2 é a quantidade de itens que ele irá remover.
console.log(listaDeDestinos)  