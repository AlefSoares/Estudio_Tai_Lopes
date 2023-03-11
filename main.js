const buttonPortifolio = document.querySelector("#portifolio")

// buttonPortifolio.addEventListener()


/*----------------------------------------------------------------------------*/

const buttonTodos = document.querySelector("#todos")
const buttonGestante = document.querySelector("#gestante")
const buttonNewborn = document.querySelector("#newborn")
const buttonAcompanhamento = document.querySelector("#acompanhamento")
const buttonSmash = document.querySelector("#smashTheCake")
const buttonPreWedding = document.querySelector("#preWedding")

const fotosTodos = document.querySelector(".imagensTodos")
const fotosGestante = document.querySelector(".imagensGestantes")
const fotosNewborn = document.querySelector(".imagensNewborn")
const fotosAcompanhamento = document.querySelector(".imagensAcompanhamento")
const fotosSmash = document.querySelector(".imagensSmash")
const fotosPreWedding = document.querySelector(".preWedding")

buttonGestante.onclick = function () {
    fotosGestante.classList.remove("active")
    fotosAcompanhamento.classList.add("active")
    fotosNewborn.classList.add("active")
    fotosSmash.classList.add("active")
    fotosPreWedding.classList.add("active")
    window.scroll(0,1450)
}
 
buttonNewborn.onclick = function () {
    fotosNewborn.classList.remove("active")
    fotosGestante.classList.add("active")
    fotosSmash.classList.add("active")
    fotosAcompanhamento.classList.add("active")
    fotosPreWedding.classList.add("active")
    window.scroll(0,1340)
}

buttonAcompanhamento.onclick = function () {
    fotosAcompanhamento.classList.remove("active")
    fotosGestante.classList.add("active")
    fotosNewborn.classList.add("active")
    fotosSmash.classList.add("active")
    fotosPreWedding.classList.add("active")
    window.scroll(0,1340)
}

buttonSmash.onclick = function () {
    fotosSmash.classList.remove("active")
    fotosAcompanhamento.classList.add("active")
    fotosGestante.classList.add("active")
    fotosNewborn.classList.add("active")
    fotosPreWedding.classList.add("active")
    window.scroll(0,1340)
}

buttonPreWedding.onclick = function () {
    fotosPreWedding.classList.remove("active")
    fotosSmash.classList.add("active")
    fotosAcompanhamento.classList.add("active")
    fotosGestante.classList.add("active")
    fotosNewborn.classList.add("active")
    window.scroll(0,1340)
}

