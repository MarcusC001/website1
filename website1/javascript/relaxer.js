const container = document.getElementById('container')
const text = document.getElementById('text')

breathAnimation()
breathAnimation()

function breathAnimation() {
    text.innerHTML = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout ( () => {
        text.innerHTML = 'Hold'
    }, 3000)

    setTimeout ( () => {
        text.innerHTML = 'Breathe Out!'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, 4500)
}
