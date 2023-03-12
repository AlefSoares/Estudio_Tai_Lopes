//HAMBURGER
const burger = document.querySelector('.burger')
const navUl = document.querySelector('.nav-links')

burger.addEventListener('click', function(){
  burger.classList.toggle('activer')
  navUl.classList.toggle('activer')
})

/*----------------------------------------------------------------------------*/

const buttonTodos = document.querySelector("#todos");
const buttonGestante = document.querySelector("#gestante");
const buttonNewborn = document.querySelector("#newborn");
const buttonAcompanhamento = document.querySelector("#acompanhamento");
const buttonSmash = document.querySelector("#smashTheCake");
const buttonPreWedding = document.querySelector("#preWedding");

const fotosTodos = document.querySelector(".all");
const fotosGestante = document.querySelector(".imagensGestantes");
const fotosNewborn = document.querySelector(".imagensNewborn");
const fotosAcompanhamento = document.querySelector(".imagensAcompanhamento");
const fotosSmash = document.querySelector(".imagensSmash");
const fotosPreWedding = document.querySelector(".preWedding");


buttonGestante.onclick = function () {
    fotosGestante.classList.toggle("active") 

    var elements = [fotosAcompanhamento, 
    fotosNewborn, fotosSmash,fotosPreWedding];

    elements.forEach(function(i) {
        i.classList.add("active")
    })
}

buttonAcompanhamento.onclick = function () {
    fotosAcompanhamento.classList.toggle("active") 

    var elements = [ fotosGestante, 
    fotosNewborn, fotosSmash,fotosPreWedding];

    elements.forEach(function(i) {
        i.classList.add("active")
    })
}

buttonNewborn.onclick = function () {
    fotosNewborn.classList.toggle("active") 

    var elements = [fotosGestante,fotosAcompanhamento, 
    fotosSmash,fotosPreWedding];

    elements.forEach(function(i) {
        i.classList.add("active")
    })
}


buttonSmash.onclick = function () {
    fotosSmash.classList.toggle("active") 

    var elements = [fotosGestante,fotosAcompanhamento, fotosNewborn, fotosPreWedding];

    elements.forEach(function(i) {
        i.classList.add("active")
    })
}

buttonPreWedding.onclick = function () {
    fotosPreWedding.classList.toggle("active") 

    var elements = [fotosGestante,fotosAcompanhamento,
        fotosNewborn, fotosSmash];

    elements.forEach(function(i) {
        i.classList.add("active")
    })

}