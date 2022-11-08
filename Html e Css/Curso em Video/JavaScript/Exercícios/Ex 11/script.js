var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota.')
} else if (idade < 18 ||idade > 65){
     console.log('Você tem o voto opcional.')
} else {
    console.log('Você tem o voto obrigatório.')
}