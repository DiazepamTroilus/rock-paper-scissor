function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissor';
  }
}
// console.log(getComputerChoice());
function play(compChoice, playerInput) {
  let playerWins = false;
  if (playerInput === compChoice) {
    return 'tie';
  } else if (playerInput === 'rock' && compChoice === 'scissor') {
    playerWins = true;
  } else if (playerInput === 'rock' && compChoice === 'paper') {
    playerWins = false;
  } else if (playerInput === 'paper' && compChoice === 'scissor') {
    playerWins = false;
  } else if (playerInput === 'paper' && compChoice === 'rock') {
    playerWins = true;
  } else if (playerInput === 'scissor' && compChoice === 'rock') {
    playerWins = false;
  } else if (playerInput === 'scissor' && compChoice === 'paper') {
    playerWins = true;
  }
  if (playerWins) {
    return `Player wins! ${playerInput} beats ${compChoice}`;
  } else {
    return `Comp wins! ${compChoice} beats ${playerInput}`;
  }
}

// function playGame() {
//   let playCount = 0;
//   let playerScore = 0;
//   let compScore = 0;
//   while (playCount < 5) {
//     playCount++;
//     const outcome = play(getComputerChoice());
//     if (outcome[0] === "P") {
//       playerScore++;
//       console.log(`Computer: ${compScore}|Player: ${playerScore}`);
//     } else if (outcome[0] === "C") {
//       compScore++;
//       console.log(`Computer: ${compScore}|Player: ${playerScore}`);
//     } else {
//       console.log(outcome);
//     }
//   }
//   if (playerScore > compScore) {
//     console.log(`Player wins with ${playerScore} to computer ${compScore}`);
//   } else if (playerScore < compScore) {
//     console.log(`Computer wins with ${compScore} to player ${playerScore}`);
//   } else {
//     console.log("End result was a tie");
//   }
// }
// playGame();
let playCount = 0;
let playerScore = 0;
let compScore = 0;
const playRound = userChoice => {
  const outcome = play(getComputerChoice(), userChoice);
  const h4 = document.getElementById('running_result');
  if (outcome[0] === 'P' && playerScore < 5 && compScore < 5) {
    playerScore++;
    h4.textContent = `Computer: ${compScore}|Player: ${playerScore}`;
  } else if (outcome[0] === 'C' && playerScore < 5 && compScore < 5) {
    compScore++;
    h4.textContent = `Computer: ${compScore}|Player: ${playerScore}`;
  } else if (playerScore < 5 && compScore < 5) {
    h4.textContent = outcome;
  }

  if (playerScore === 5 || compScore === 5) {
    const end = document.getElementById('final_result');
    if (playerScore > compScore) {
      end.textContent = `Player wins with ${playerScore} to computer ${compScore}`;
    } else if (playerScore < compScore) {
      end.textContent = `Computer wins with ${compScore} to player ${playerScore}`;
    } else {
      end.textContent = 'End result was a tie';
    }
  }
};
const rock = document.getElementById('rock');
console.log(rock);
rock.addEventListener('click', playRound.bind(null, 'rock'));

const scissor = document.getElementById('scissor');
console.log(scissor);
scissor.addEventListener('click', playRound.bind(null, 'scissor'));

const paper = document.getElementById('paper');
console.log(paper);
paper.addEventListener('click', playRound.bind(null, 'paper'));
