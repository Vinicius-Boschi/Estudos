function Reajuste() {
    let nome = document.getElementById("nome_funcionario").value 
    let salário = Number(document.getElementById("salario").value)
    let porcentagem = Number(document.getElementById("porcentagem").value)
    let reajuste = porcentagem / 100
    let aumento = (salário * reajuste)
    let ganho = Number(salário) + (aumento)
    
    document.querySelector('#aumento').innerHTML  += (`${nome} recebeu um aumento salarial!`)
    document.querySelector('#resultado').innerHTML += (`<span> O salário atual era de R$ ${salário.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</span><br>`)
    document.querySelector('#resultado').innerHTML += (`<span>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} no próximo mês.</span><br>`)
    document.querySelector('#resultado').innerHTML += (`<span> E a partir daí,<strong> ${nome} </strong> vai passar a ganhar ${ganho.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</span><br>`)}