function Preço() {
    let nome = document.getElementById("nome_produto").value
    let anterior= Number(document.getElementById("preco_anterior").value)
    let atual = Number(document.getElementById("preco_atual").value)
    let preço = (atual) - (anterior)
    let porcentagem = (atual/anterior - 1) * (100)
    document.querySelector('#texto').innerHTML += ('Analisando os valores informados')
    document.querySelector('#resultado').innerHTML += (`<span> O <strong> ${nome} </strong> custava ${anterior.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e agora custa ${atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>.<br>`)

    if(atual > anterior) {
        document.querySelector('#resultado').innerHTML += (`<span> Hoje o <strong> ${nome} </strong> está mais caro.</span><br>`)
        document.querySelector('#resultado').innerHTML += (`<span> O preço subiu ${preço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior.</span><br>`)
        document.querySelector('#resultado').innerHTML += (`<span> Uma variação de ${porcentagem.toFixed(1).replace(".",",")}% pra cima </span><br>`)
    }else {
        document.querySelector('#resultado').innerHTML += (`<span> Hoje o <strong> ${nome} </strong> está mais barato.</span><br>`)
        document.querySelector('#resultado').innerHTML += (`<span> O preço caiu ${preço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior. </span><br>`)
        document.querySelector('#resultado').innerHTML += (`<span> Uma variação de ${porcentagem.toFixed(1).replace(".",",")}% pra baixo </span>`)
    }
    document.getElementById("nome_produto").value = ""
    document.getElementById("preco_anterior").value = ""
    document.getElementById("preco_atual").value = ""
}