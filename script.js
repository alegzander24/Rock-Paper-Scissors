const container = document.querySelector(".container");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const scoreText = document.querySelector(".score");
const resultText = document.querySelector(".result");

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	return prompt("choose: rock, paper or scissors").toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		return "it's a tie !";
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		return true;
	} else {
		return false;
	}
}

let humanScore = 0;
let computerScore = 0;

function updateScore(result) {
	if (result === true) {
		++humanScore;
	} else if (result === false) {
		++computerScore;
	} else {
		console.log("it's a tie !");
	}
}

function updateResultText(result) {
	if (result === true) {
		resultText.textContent = "YOU WIN";
	} else if (result === false) {
		resultText.textContent = "YOU LOOSE";
	} else {
		resultText.textContent = "it's a tie !";
	}
}

function isGameOver(pScore, cScore) {
	if (pScore === 10 || cScore === 10) {
		return true;
	}
	return false;
}

container.addEventListener("click", (e) => {
	let playerChoice = e.target.className;
	let result = playRound(playerChoice, getComputerChoice());

	if (isGameOver(humanScore, computerScore)) {
		resultText.textContent = "Game Over";
	} else {
		updateScore(result);
		updateResultText(result);
	}
	scoreText.textContent = `Your score : ${humanScore} \n Computer score : ${computerScore}`;
});
