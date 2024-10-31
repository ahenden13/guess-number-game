document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let randomNum;
let attempts = 0;
let guessCount;
let wins = 0;
let losses = 0;

document.querySelector("#winCount").textContent = "0";
document.querySelector("#lossCount").textContent = "0";

initializeGame();

function initializeGame() {
	randomNum = Math.floor(Math.random() * 99) + 1;
	console.log("randomNum: " + randomNum);
	attempts = 0;
	guessCount = 7;

	//hides reset button
	document.querySelector("#resetBtn").style.display = "none";
	
	//shows guess btn
	document.querySelector("#guessBtn").style.display = "inline";

	let playerGuess = document.querySelector("#playerGuess");
	playerGuess.focus() //adds focus to textbox
	playerGuess.value = ""; //clears textbox

	let feedback = document.querySelector("#feedback");
	feedback.textContent = ""; //clears feedback

	//clearing previous guesses
	document.querySelector("#guesses").textContent = "";

	document.querySelector("#guessCounter").textContent = "7";
}

function checkGuess() {
	let feedback = document.querySelector("#feedback");
	feedback.textContent = "";
	let guess = document.querySelector("#playerGuess").value;
	console.log("Player guess: " + guess);

	if (guess < 1 || guess > 99) {
		feedback.textContent = "*Enter a number between 1 and 99*";
		feedback.style.color = "black";
		return;
	}

	attempts++;
	console.log("Attempts: " + attempts);
	guessCount--;
	document.querySelector("#guessCounter").textContent = guessCount;
	feedback.style.color = "#e39105";

	if (guess == randomNum) {
		feedback.textContent = "You guessed it, you won :)";
		feedback.style.color = "#1e6131";
		wins++;
		document.querySelector("#winCount").textContent = wins;
		gameOver();
	} else {
		document.querySelector("#guesses").textContent += guess + " ";
		if (attempts == 7) {
			feedback.textContent = "Sorry, you lost :( The random number was " + randomNum;
			feedback.style.color = "#fa0240";
			losses++;
			document.querySelector("#lossCount").textContent = losses;
			gameOver();
		} else if (guess > randomNum) {
			feedback.textContent = "Guess was high";
		} else {
			feedback.textContent = "Guess was low";
		}
	}
}

function gameOver() {
	let guessBtn = document.querySelector("#guessBtn");
	let resetBtn = document.querySelector("#resetBtn");

	guessBtn.style.display = "none"; //hides Guess Btn
	resetBtn.style.display = "inline"; //displays reset btn
}

