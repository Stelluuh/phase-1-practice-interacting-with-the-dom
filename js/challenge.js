const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
const submit = document.querySelector('#submit');
const likes = document.querySelector('.likes');
const commentForm = document.querySelector('#comment-form')
const commentInput = document.getElementById('comment-input')
const list = document.getElementById('list')
let timerPaused = false;//is the timer paused? False = not paused, true = timer is paused.
let likeObj = {}


//1. See the timer increment every second once the page has loaded
let interval = setInterval(countUp, 1000)




// 2. Manually increment and decrement the counter using the plus and minus buttons.
plus.addEventListener('click', countUp)
minus.addEventListener('click', countDown)

// 3. "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
heart.addEventListener('click', likeCounter)

// 4. Pause the counter, which should:
  // a) pause the counter
pause.addEventListener('click', timerControl)
  
  // b) disable all buttons except the pause button
  // c)switch the label on the button from "pause" to "resume"
  function timerControl() {
  timerPaused = !timerPaused
  //pause timer:
  if(timerPaused) {
    clearInterval(interval);
    pause.textContent = 'resume';
    disableButtons()
// 5. Click the "restart" button to restart the counter and re-enable the buttons.  
    //resume timer
  } else if(pause.textContent === 'resume') {
    interval = setInterval(countUp, 1000)
    pause.textContent = 'pause'
    enableButtons()
  }
}


//6. Leave comments on my gameplay, such as: "Wow, what a fun game this is."
commentForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  let ul = document.createElement('ul')
  ul.textContent = e.target[0].value
  list.append(ul)
  commentInput.value = ""
})

/*-------------------------CALLBACK FUNCTIONS--------------------------*/
function countUp() {
  counter.innerText = parseInt(counter.innerText, 10) +1
}
function countDown() {
  counter.innerText = parseInt(counter.innerText, 10) -1
}
function disableButtons() {
  plus.disabled = true; //.disabled is a property in all buttons that you can set to true or false. 
  minus.disabled = true;
  heart.disabled = true;
  submit.disabled = true;
}
function enableButtons() {
  plus.disabled = false;
  minus.disabled = false;
  heart.disabled = false;
  submit.disabled = false;
}
function likeCounter() {
  let secondsValue = document.getElementById('counter').textContent;
  if(likeObj[secondsValue]) {
    likeObj[secondsValue] += 1
  } else {
    likeObj[secondsValue] = 1
  }
  listLikes();
}
function listLikes() {
  likes.innerHTML = "";
  for(let counterValue in likeObj) {
    let li = document.createElement('li');
    li.innerText = `${counterValue} has been liked ${likeObj[counterValue]} times.`;
    likes.append(li);
  };
}
