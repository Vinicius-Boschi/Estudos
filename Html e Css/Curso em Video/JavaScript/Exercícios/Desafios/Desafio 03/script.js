function Números() {
    var num =  prompt('Digite um número inteiro qualquer')
    var ant = num -1 
    var suc = parseInt(num) + 1 
    alert(`Antes de ${num}, temos o número ${ant}. \nDepois de ${num}, temos o número ${suc}.`)
}