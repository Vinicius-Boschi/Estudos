console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 19
const estaAcompanhado = true
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

/* if(idadeComprador >= 18) {
    console.log("Comprador é maior de idade")
    listaDeDestinos.splice(1, 1)    
} else if(estaAcompanhado) {
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(1, 1)
   }else {
    console.log("Comprador é menor de idade")
   }
 */

   if(idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!")
    listaDeDestinos.splice(2, 1)
} else {
    console.log("Infelizmente você não pode comprar a passagem por ser menor de idade.")
   }

console.log("Embarque: \n")

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar sem a passagem.")
}

console.log(listaDeDestinos) 

// Treinar essas lógicas criando coisas do dia a dia para testes.