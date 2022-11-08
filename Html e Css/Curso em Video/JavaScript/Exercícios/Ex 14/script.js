function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let minutos = data.getMinutes()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >=0 && hora <12){
        // Bom Dia!
        img.src = 'img/manhã.png'
        document.body.style.background = '#F2D6BD'
    }else if (hora >= 12 && hora <= 18){
        // Boa Tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#B0A8BF'
    }else {
        //Boa Noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#473959'
    }
}