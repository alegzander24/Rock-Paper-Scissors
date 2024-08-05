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
function playGame() {
	let result = playRound(getHumanChoice(), getComputerChoice());
	if (result === true) {
		console.log("YOU WIN");
		++humanScore;
	} else if (result === false) {
		console.log("YOU LOOSE");
		++computerScore;
	} else {
		console.log("it's a tie !");
	}

	console.log(`your score : ${humanScore}`);
	console.log(`computer score : ${computerScore}`);
}

while (humanScore <= 4 && computerScore <= 4) {
	playGame();
}
