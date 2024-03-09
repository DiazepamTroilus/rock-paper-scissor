function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}
// console.log(getComputerChoice());
function play(compChoice) {
  const playerInput = prompt("Rock, paper or scissor?").toLowerCase();
  let playerWins = false;
  if (playerInput === compChoice) {
    return "tie";
  } else if (playerInput === "rock" && compChoice === "scissor") {
    playerWins = true;
  } else if (playerInput === "rock" && compChoice === "paper") {
    playerWins = false;
  } else if (playerInput === "paper" && compChoice === "scissor") {
    playerWins = false;
  } else if (playerInput === "paper" && compChoice === "rock") {
    playerWins = true;
  } else if (playerInput === "scissor" && compChoice === "rock") {
    playerWins = false;
  } else if (playerInput === "scissor" && compChoice === "paper") {
    playerWins = true;
  }
  if (playerWins) {
    return `Player wins! ${playerInput} beats ${compChoice}`;
  } else {
    return `Comp wins! ${compChoice} beats ${playerInput}`;
  }
}

function playGame() {
  let playCount = 0;
  let playerScore = 0;
  let compScore = 0;
  while (playCount < 5) {
    playCount++;
    const outcome = play(getComputerChoice());
    if (outcome[0] === "P") {
      playerScore++;
      console.log(`Computer: ${compScore}|Player: ${playerScore}`);
    } else if (outcome[0] === "C") {
      compScore++;
      console.log(`Computer: ${compScore}|Player: ${playerScore}`);
    } else {
      console.log(outcome);
    }
  }
  if (playerScore > compScore) {
    console.log(`Player wins with ${playerScore} to computer ${compScore}`);
  } else if (playerScore < compScore) {
    console.log(`Computer wins with ${compScore} to player ${playerScore}`);
  } else {
    console.log("End result was a tie");
  }
}
playGame();
