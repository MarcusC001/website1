const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        const img = btn.querySelector('image')
        const src = img.getAttriubute('src')
        const alt = img.getAttriubute('alt')
        selected_insect = {src, alt}
        startGame()
        createInsect()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}


function increaseTime() {
    let s = seconds % 60
    let m = math.floor(seconds / 60)
    if (s < 10){
        s = `0${s}`
    }
    if (m < 10){
        m = `0${m}`
    }
    timeElement.innerHTML = `Time: ${m}:${s}`
    seconds = seconds + 1;
}



function creatInsect(){
    const insect = document.createElement('div')
    insect.classList.add('insect')
    insect.innerHTML = `<img src="${selected_insect.src}"
    alt = "${selected_insect.alt}" >`
    game_container.appendChild(insect)
}


function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    console.log(Math.random())
}


function catchInsect() {
    let insect = event.target;
    increaseScore()
    insect.classList.add('caught')
    setTimeout( () => insect.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score = score + 1
    if (score = 10){
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}
