    let cotação = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
    
    function Converter() {
        let carteira = Number(prompt('Quantos R$ você tem na carteira?'))
        let dolar = carteira / cotação
        document.querySelector('#resultado').innerHTML += 'Com ' + carteira.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + '  você irá conseguir comprar ' + dolar.toLocaleString('us', { style: 'currency', currency: 'USD' }) + ' dólares.'
    }