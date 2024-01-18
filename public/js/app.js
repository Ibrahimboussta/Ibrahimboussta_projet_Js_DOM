let sign = document.getElementById('sign')
let login = document.getElementById('login')
let login_in = document.querySelector('.login')
let sign_in = document.querySelector('.sign')
let close = document.getElementById('close')
let modale = document.querySelector('.modale')
let connexion = document.getElementById('connexion')

sign.addEventListener('click', () => {
    sign_in.style.display="block"
    login_in.style.display="none"
    
})
login.addEventListener('click', () => {
    sign_in.style.display="none"
    login_in.style.display="block"
})










connexion.addEventListener('click', () => {
    modale.style.display = 'block'
})
close.addEventListener('click', () => {
    modale.style.display = 'none'
})

// let BreakFast = document.getElementById('braekfast')
// // li bghina nms7o
// let Starter_btn = document.getElementById('btn-starter')
// let menu_breakfast = document.querySelector('.menu_break')
// let btn_menu_dinner = document.querySelector('.menu_dinner')
// let menu_dinner = document.querySelector('#dinner_menu')
// let braek_menu = document.querySelector('.breakfast-menu')

// let dinner = document.getElementById('denner')
// let braekFast = document.getElementById('BraekFast')
// console.log(BreakFast, Starter);

// menu_breakfast.addEventListener('click', () => {
//     console.log('hihi');
//     braek_menu.style.display = 'none'
//     menu_dinner.style.display = 'block'

//     // dinner.style.display = 'block'
//     // Starter.style.display = 'none'

//     // menu.style.display='none'
// })

let braek_btn = document.querySelector('.menu_break')
let break_menu = document.querySelector('.breakfast-menu')
let dinner_menu = document.getElementById('dinner_menu')
braek_btn.addEventListener('click', () => {
    dinner_menu.style.display = 'block'
    break_menu.style.display = 'none'
})


let play_btn = document.getElementById('video')
let video = document.querySelector('.video')
play_btn.addEventListener('click', () => {
    document.body.style.src
    video.style.display = 'block'
    // window.TransitionEvent = '1s'
    document.body.setAttribute('class', 'blur')
    // video.style.zIndex = 999
})
