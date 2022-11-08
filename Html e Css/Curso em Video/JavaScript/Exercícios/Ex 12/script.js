var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var dia = agora.getDate()
var mês = agora.getMonth()
var ano = agora.getFullYear()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos do dia ${dia} do ${mês} de ${ano}.`)

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora >= 18) {
    console.log('Boa Noite!')
}