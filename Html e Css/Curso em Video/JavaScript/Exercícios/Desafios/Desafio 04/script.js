function comprar() {
    let prod = document.getElementById("produto").value
    let custo = Number(document.getElementById("custo").value)
    let valor = Number(document.getElementById("valor").value)
    let troco = Number(valor - custo)
    let faltam = Number(custo - valor)
  
    if(valor > custo) {
        let resultado = document.querySelector("#resultado").innerHTML += (`Você comprou o(a) ${prod} que custou ${custo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.<br> Deu ${valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em dinheiro e vai receber ${troco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} de troco.<br> Volte Sempre!`)
    } else {
        document.querySelector("#resultado").innerHTML += (`Faltam ${faltam.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais para você poder comprar o ${prod}.`)
    }
    document.getElementById("produto").value = ""
    document.getElementById("custo").value = ""
    document.getElementById("valor").value = ""
}