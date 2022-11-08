function Desconto() {
    var produto = document.getElementById("produto").value
    var preço = Number(document.getElementById("preco").value)
    var porcentagem = Number(document.getElementById("input_desconto").value)
    var desconto = Number(preço * porcentagem) / 100
    var economizado = Number(preço - desconto) 

    document.querySelector('#desconto').innerHTML += (`Calculando desconto de ${porcentagem}% para ${produto}<br>`)
    document.querySelector('#resultado').innerHTML += (`<span> O preço original era de ${preço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</span><br>`)
    document.querySelector('#resultado').innerHTML += (`<span> Você acaba de ganhar ${desconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} de desconto. </span><br>`)
    document.querySelector('#resultado').innerHTML += (`<span> No fim, você vai pagar ${economizado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} no(a) <strong>${produto}</strong></span>.`)

    document.getElementById("produto").value = ""
    document.getElementById("preco").value = ""
    document.getElementById("input_desconto").value = ""
}  