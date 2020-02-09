const btn = document.querySelectorAll("button");
const choice = document.querySelectorAll(".choice");
const player_choice = document.querySelector("#player_choice");
const player_score = document.querySelector("#player_score");
const computer_choice = document.querySelector("#computer_choice");
const computer_score = document.querySelector("#computer_score");
let playerWins = 0;
let computerWins = 0;

btn.forEach(btn => {
  btn.addEventListener("click", function() {
    game(btn.id);
  });
});

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(3));
}

function computerPlay() {
  let randomChoice = getRandomInt();
  switch (randomChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      return "win";
    case playerSelection === "rock" && computerSelection === "paper":
      return "loss";
    case playerSelection === "paper" && computerSelection === "rock":
      return "win";
    case playerSelection === "paper" && computerSelection === "scissors":
      return "loss";
    case playerSelection === "scissors" && computerSelection === "paper":
      return "win";
    case playerSelection === "scissors" && computerSelection === "rock":
      return "loss";
    case playerSelection === computerSelection:
      return "draw";
  }
}

function getOverallWinner() {
  switch (true) {
    case playerWins === 5:
      player_choice.src = "./img/pose_win_boy.png";
      computer_choice.src = "./img/pose_lose_boy.png";
      removeButtons();
      addReset();
      break;
    case computerWins === 5:
      player_choice.src = "./img/pose_lose_boy.png";
      computer_choice.src = "./img/pose_win_boy.png";
      removeButtons();
      addReset();
      break;
  }
}

function getRoundWinner(results) {
  const computerWon = document.querySelector("#computer_container");
  const playerWon = document.querySelector("#player_container");
  switch (results) {
    case "win":
      playerWins++;
      player_score.src = `./img/${playerWins}.png`;
      playerWon.classList.remove("draw");
      playerWon.classList.add("win");
      playerWon.classList.remove("lose");
      computerWon.classList.remove("draw");
      computerWon.classList.remove("win");
      computerWon.classList.add("lose");
      checkIfFinished();
      break;
    case "loss":
      computerWins++;
      computer_score.src = `./img/${computerWins}.png`;
      playerWon.classList.remove("win");
      playerWon.classList.remove("draw");
      playerWon.classList.add("lose");
      computerWon.classList.remove("draw");
      computerWon.classList.remove("lose");
      computerWon.classList.add("win");
      checkIfFinished();
      break;
    case "draw":
      playerWon.classList.add("draw");
      computerWon.classList.add("draw");
      checkIfFinished();
      break;
  }
}

function checkIfFinished() {
  if (playerWins == 5 || computerWins == 5) {
    getOverallWinner();
  }
}

function game(player) {
  if (playerWins != 5 && computerWins != 5) {
    let computerSelection = computerPlay();
    playerSelection = player;

    player_choice.src = `./img/${player}.png`;
    computer_choice.src = `./img/${computerSelection}.png`;

    getRoundWinner(playRound(playerSelection, computerSelection));
  }
}

function removeButtons() {
  document.getElementById("buttons").remove();
}

function addReset() {
  const container = document.querySelector("#player");
  const resetContainer = document.createElement("div");
  resetContainer.classList.add("playfield");
  container.appendChild(resetContainer);
  const reset = document.createElement("button");
  reset.textContent = "Reset";
  reset.classList.add("button-container");
  resetContainer.appendChild(reset);
  reset.addEventListener("click", () => {
    location.reload();
  });
}
