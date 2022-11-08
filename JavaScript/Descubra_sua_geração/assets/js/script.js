function showGeneration() {
    let yearBirth = document.querySelector('#input').value
    let text = document.querySelector('.text')
    let img = document.querySelector('.image')
    let habits = document.querySelector('.habits_title')
    let list = document.querySelector('.list')

    if (yearBirth <= 1944) {
        alert('Por favor insira uma data depois de 1944.')

    } else if (yearBirth>= 1945 && yearBirth <= 1964) {
        img.setAttribute('src', 'assets/img/geracao-baby-boomers.jpeg')
        text.innerHTML = "Você é um Baby Boomer"
        habits.innerHTML = "Seus hábitos geralmente são: "  
        list.innerHTML = baby_boomers

    } else if (yearBirth >= 1965 && yearBirth <= 1984) {
        img.setAttribute('src', 'assets/img/geracao-x.jpeg')
        text.innerHTML = "Você é da geração X"
        habits.innerHTML = "Seus hábitos geralmente são: "  
        list.innerHTML = geracao_x

    } else if (yearBirth >= 1985 && yearBirth <= 1994) {
        img.setAttribute('src', 'assets/img/millennials.jpeg')
        text.innerHTML = "Você é um Millennials"
        habits.innerHTML = "Seus hábitos geralmente são: "  
        list.innerHTML = millennials

    }else if (yearBirth >= 1995 && yearBirth <= 2009) {
        img.setAttribute('src', 'assets/img/millennials.jpeg')
        text.innerHTML = "Você é da geração Z"
        habits.innerHTML = "Seus hábitos geralmente são: "  
        list.innerHTML = geracao_z
    } else {
        img.setAttribute('src', 'assets/img/geracao_alpha.jpeg')
        text.innerHTML = "Você é da geração Alpha"
        habits.innerHTML = "Seus hábitos geralmente são: "  
        list.innerHTML = geracao_alpha
    }
}