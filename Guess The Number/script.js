let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right🎉`);
    document.body.style.backgroundColor = "#60B347";
    // document.getElementById("wrapper").style.backgroundColor = "green";
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low📉`);
    document.body.style.backgroundColor = "#FAA300";
    // document.getElementById("wrapper").style.backgroundColor = "#FF9843";
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High📈`);
    document.body.style.backgroundColor = "red";
    // document.getElementById("wrapper").style.backgroundColor = "#EF4040";
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Click to Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    document.body.style.backgroundColor = "#212121";
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    lowOrHi.innerHTML = ``;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

// // reset button
// const againBTN = document.querySelector('.again');

// //reset event handler
// againBTN.addEventListener('click', () => {
//   // reset score
//   score = 20;
//   // reset secret number
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   //reset message,score and number to initial values
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   //reset css values
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// })
