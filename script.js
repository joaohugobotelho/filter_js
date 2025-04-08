const input = document.querySelector('input')
const cards = document.querySelectorAll('li')

input.addEventListener('input', filterAction)

function filterAction() {
  if(input.value !== '') {
    for (let card of cards) {
    let name = card.querySelector('h2')

    name = name.textContent
    }
  }
}