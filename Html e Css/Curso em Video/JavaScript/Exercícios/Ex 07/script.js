function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var tn3 = document.getElementById('txtn3')
    var tn4 = document.getElementById('txtn4')
    var tn5 = document.getElementById('txtn5')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
    var s = n1 + n2 / n3 * n4 - n5
    res.innerHTML = `A soma entre ${n1}, ${n2}, ${n3}, ${n4} e ${n5} é igual a <strong> ${s} </strong>`
}