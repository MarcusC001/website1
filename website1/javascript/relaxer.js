const container = document.getElementById('container')
const text = document.getElementById('text')

function breathAnimation() {
    text.innerHTML = 'Breathe In'
    container.classList.add('grow')
}
