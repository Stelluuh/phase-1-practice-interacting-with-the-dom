//1. See the timer increment every second once the page has loaded.
const counter = document.getElementById('counter')
let interval = setInterval(() => countUp(), 1000)
const countUp = () => {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
}


//2. Manually increment and decrement the counter using the plus and minus buttons.
//grab the buttons
//add an even listener to it (click event) with callback
//create function that handles increment or decrement.
    //use parseInt(to change the string into an integer: '3' to 3)


const minus = document.getElementById('minus')
minus.addEventListener('click', () => decrement())
const decrement = () => counter.innerText = parseInt(counter.innerText, 10) - 1

const plus = document.getElementById('plus')
plus.addEventListener('click', () => increment())
const increment = () => counter.innerText = parseInt(counter.innerText, 10) + 1

// 3. "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

    //grab the like button
    //add an event listener (click, callback)
    //create the function that handles the like
const heartButton = document.getElementById('heart')
console.log(heartButton)

