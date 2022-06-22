let simbolos = ["♦", "♥", "♠", "♣"];

const arriba = document.querySelector("#top")

const bot = document.querySelector("#bot")

const center = document.querySelector("#center")

const botton = document.querySelector("#btn")

const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"]

const span2 = document.querySelector("#span1")

let time = 5



function ramdon(arr) {
    let ramdonnum = Math.floor(Math.random() * arr.length)
    return arr[ramdonnum]
}

window.onload = function () {

    ramdoncard();
    setInterval(ramdoncard(), 5000)

}

function ramdoncard() {

    let simboloramdon = ramdon(simbolos)

    let ramdonvalores = ramdon(valores)

    center.innerHTML = ramdonvalores

    if (simboloramdon == "♥" || simboloramdon == "♦") {

        bot.innerHTML = simboloramdon

        arriba.innerHTML = simboloramdon

        bot.className = "red"

        arriba.className = "red"
    }
    else {
        bot.innerHTML = simboloramdon

        arriba.innerHTML = simboloramdon

        bot.className = "black"

        arriba.className = "black"
    }

}
botton.addEventListener("click", () => ramdoncard())






