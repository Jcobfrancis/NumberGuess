const numberInput = document.querySelector('input');
const submitGuess = document.querySelector('.submit-guess');
const previousAttempts = document.querySelector('#prev');
const remaining = document.querySelector('#remaining');
const hint = document.querySelector('#hint');
const newGame = document.querySelector('.new-game');

const attempts = [];

let number = Math.floor(Math.random() * (100 + 1));
console.log(number);


submitGuess.addEventListener('click', function() {
  
  if (numberInput.value == number) {
    winner();
    
  } else if (numberInput.value == ""){
    hint.innerText = "Wrong Input";
    
  } else if (numberInput.value > number) {
    hint.innerText = "Too High Try again";
    saveNumber();
    countAttempts();
    
  }else if(numberInput.value < number){
    hint.innerText = "Too Low Try again";
    saveNumber();
    countAttempts();
  }
  
  looser();
})

//Start new game
newGame.addEventListener('click', function(){
  location.reload();
})

// reset input value and count attempts
function countAttempts() {
  numberInput.value = null;
  return remaining.innerText -= 1;
}

// stop game if player wins
function winner() {
  hint.innerText = "You Won! Congratulations!";
  remaining.innerText -= 1;
  numberInput.disabled = 'true';
  submitGuess.setAttribute('disabled', '');
}

// stop game when player runs out of attempts
function looser() {
  if (remaining.innerText == 0) {
    hint.innerText = "You Lost!";
    numberInput.disabled = 'true';
    submitGuess.setAttribute('disabled', '')
  }
}

// save number from previous attempts
function saveNumber() {
  attempts.push(numberInput.value);
  previousAttempts.innerText = attempts.join('-');
}
