function calcular() {
    var txtv = document.getElementById('txtlevel')
    var vel = Number(txtv.value)
    var res = document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h. </strong></p>`

    if(vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade.</p>`
    }

    if(vel < 30) {
        res.innerHTML += `<p>Não dirija muito abaixo da média de velocidade para não causar lentidão e nem acidentes no tráfego.</p>`
    }

    res.innerHTML += `<p>Dirija sempre com o cinto de segurança.</p>`
    res.innerHTML += `<p>Se beber não dirija.</p>`
}