function calculate() {

    let buy = document.querySelector(".valueBuy").value
    let send = document.querySelector(".valueSend").value
    let res = document.querySelector(".result")

    let sum = send - buy

    if (sum != "") {
        let coinOneReal = 1 * sum
        let coinFiftyCents = coinOneReal * 2
        let coinTwentyFCents = coinOneReal * 4
        let coinTenCents = coinOneReal * 10
        let coinFiveCents = coinOneReal * 20

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='../troco/img/1real.png'" + ">" + "<span class='resultText'>" + coinOneReal + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='../troco/img/50centavos.png'" + ">" + "<span class='resultText'>" + coinFiftyCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='../troco/img/25centavos.png'" + ">" + "<span class='resultText'>" + coinTwentyFCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='../troco/img/10centavos.png'" + ">" + "<span class='resultText'>" + coinTenCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='../troco/img/5centavos.png'" + ">" + "<span class='resultText'>" + coinFiveCents + " moedas" + "</span>" + "</div>"

        document.querySelector(".valueBuy").value = ""
        document.querySelector(".valueSend").value = ""

    } else {
        alert("Você precisa entregar o dinheiro correto.")
    }
}