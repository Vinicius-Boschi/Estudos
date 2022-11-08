function numeroComDoisDigitos(numero){
    return numero.toString().padStart(2,0)
}

function numeroComQuatroDigitos(numero){
    return numero.toString().padStart(4,0)
}

function pegaAnoAtual(){
    return new Date().getFullYear().toString()
}

function pegaMesAtual(){
    return numeroComDoisDigitos(new Date().getMonth()+1)
}

function pegaDiaAtual(){
    return numeroComDoisDigitos(new Date().getDate())
}

function calculaIdade(dia, mes, ano){
    var anoAtual = pegaAnoAtual()
    var mesAtual = pegaMesAtual()
    var diaAtual = pegaDiaAtual()

    ano = numeroComQuatroDigitos(ano)
    mes = numeroComDoisDigitos(mes)
    dia = numeroComDoisDigitos(dia)
    
    var dataAtualConcatenada = "" + anoAtual + mesAtual + diaAtual
    var anoNascimentoConcatenado = "" + ano + mes + dia

    var idadeQuebrada = (dataAtualConcatenada - anoNascimentoConcatenado) / 10000

    return parseInt(idadeQuebrada)
}