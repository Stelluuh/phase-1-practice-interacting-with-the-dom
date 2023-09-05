//1. See the timer increment every second once the page has loaded.
const counter = document.getElementById('counter')
let interval = setInterval(() => countUp(), 1000)
const countUp = () => {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
}


//2. Manually increment and decrement the counter using the plus and minus buttons.
//grab the buttons
//add an even listener to it
//create callback that handles increment or decrement.

const minus = document.getElementById('minus')
minus.addEventListener('click', () => decrement())
const decrement = () => counter.innerText = parseInt(counter.innerText, 10) - 1

const plus = document.getElementById('plus')
plus.addEventListener('click', () => increment())
const increment = () => counter.innerText = parseInt(counter.innerText, 10) + 1
