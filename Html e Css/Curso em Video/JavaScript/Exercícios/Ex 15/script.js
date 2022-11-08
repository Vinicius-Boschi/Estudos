function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#ano_nasc')
    let res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/bebe-h.png')
            } else if (idade <= 24) {
                // Jovem
                img.setAttribute('src', 'img/jovem-h.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-h.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-h.png')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade <= 24) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosa-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}