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

// connexion.addEventListener('click', () => {
//     modale.style.display = 'block'
// })
// close.addEventListener('click', () => {
//     modale.style.display = 'none'
// })



let play_btn = document.getElementById('video')
let btnPlay = document.getElementById('play')
let video = document.querySelector('.video')
let video1 = document.querySelector('.video1')
let fermer = document.querySelector('.fermer')
let fermer1 = document.querySelector('.fermer1')

play_btn.addEventListener('click', () => {
    // document.body.style.src
    video.style.display = 'block'
    fermer.style.display = 'block'
    document.body.style.overflow = 'hidden'

    // window.TransitionEvent = '1s'
    document.body.setAttribute('class', 'blur')
    // video.style.zIndex = 999
})
fermer.addEventListener('click', () => {
    video.style.display = 'none'
    fermer.style.display = 'none'
})

btnPlay.addEventListener('click', () => {
    // document.body.style.src
    video1.style.display = 'block'
    fermer1.style.display = 'block'
    // window.TransitionEvent = '1s'
    // document.body.setAttribute('class', 'blur')
    // video.style.zIndex = 999
})

fermer1.addEventListener('click', () => {
    video1.style.display = 'none'
    fermer1.style.display = 'none'
})


// let img = document.querySelectorAll('#imges')
// let prevBtn = document.getElementById('prevBtn')
// let nextBtn = document.getElementById('nextBtn')
// let dots = document.querySelectorAll('.dot')
// // console.log(img);

// let counter = 0

// nextBtn.addEventListener('click', nextSlide)
// function nextSlide() {
//     img[counter].style.animation = 'next1 0.5s ease-in forwards'
//     if (counter >= img.length - 1) {
//         counter = 0;
//     }else{
//         counter++;
//     }
//     img[counter].style.animation = 'next2 0.5s ease-in forwards'

// }

// let slidInit = () => {
//     let imgList = document.querySelectorAll('#imges')
//     let btns = document.querySelectorAll('.prevBtn', '.nextBtn')

//     btns.forEach(element => {
//         element.addEventListener('click', () => {
//             console.log(element);
//             let direction = element.id === ''
//         })
//     });
// }


let images = document.querySelectorAll('.item')
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let counter = 0
let counterLenght = images.length - 1

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

function nextSlide(){
    images.scrollLeft += counter
    if (counter + 1 > counterLenght) {
        counter = 0
    }else{
        counter++
    }
}


function prevSlide(){
    images.scrollLeft -= counter
    if (counter - 1 > counterLenght) {
        counter = 0
    }else{
        counter--
    }
}

// nextBtn.addEventListener('click', function(){
//     if (counter + 1 > counterLenght) {
//         counter = 0
//     }else{
//         counter = counter + 1
//     }
//     nextSlide()
// })
