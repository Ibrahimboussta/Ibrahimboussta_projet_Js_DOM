let sign = document.getElementById('sign')
let login = document.getElementById('login')
let login_in = document.querySelector('.login')
let sign_in = document.querySelector('.sign')
let close = document.getElementById('close')
let modale = document.querySelector('.modale')
let connexion = document.getElementById('connexion')

sign.addEventListener('click', () => {
    login_in.style.display = 'block'
    sign_in.style.display = 'none'
})
login.addEventListener('click', () => {
    login_in.style.display = 'block'
    sign_in.style.display = 'none'
})
connexion.addEventListener('click', () => {
    modale.style.display = 'block'
})
close.addEventListener('click', () => {
    modale.style.display = 'none'
})

let BreakFast = document.getElementById('braekfast')
let Starter = document.getElementById('starter')
let starter = document.getElementById('Starter')
let braekFast = document.getElementById('BraekFast')
console.log(BreakFast, Starter);

BreakFast.addEventListener('click', () => {
    // console.log('hihi');
    starter.style.display = 'block'


})