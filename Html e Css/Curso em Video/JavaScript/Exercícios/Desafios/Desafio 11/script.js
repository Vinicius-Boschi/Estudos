function AnoBissexto() {
    var verificar = prompt('Qual é o ano que você quer verificar?')
    document.querySelector('#texto').innerHTML += (`Analisando o ano de ${verificar}...`)
    if(verificar % 4 == 0) {
        document.querySelector('#resultado_certo').innerHTML += (`O ano de ${verificar} <span class="certo"> É BISSEXTO </span>`)
    }else{
        document.querySelector('#resultado_errado').innerHTML += (`O ano de ${verificar} <span class="errado"> NÃO É BISSEXTO</span>`)
    }
}