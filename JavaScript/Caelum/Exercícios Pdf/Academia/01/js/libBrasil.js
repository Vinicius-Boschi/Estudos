function parseFloatBrasil(texto){
    return parseFloat(texto.replace(",", "."))
}

function formataFloatBrasil(numero, qtCasasDecimais = 2){
    return numero.toFixed(qtCasasDecimais).replace(".", ",")
}