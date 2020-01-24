let win = 0;
let playerWin = 0;
let computerWin = 0;
let loss = 0;
let draw = 0;

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

function getOverallWinner(win, loss, draw) {
  switch (true) {
    case win > loss:
      alert("you won!");
      break;
    case loss > win:
      alert("you lost!");
      break;
  }
}

function getRoundWinner(results, playerSelection, computerSelection) {
    const computerWon = document.querySelector('#computer_container');
    const playerWon = document.querySelector('#player_container');
  switch (results) {
    case "win":
      playerWin++;
      playerWon.classList.remove('draw'); 
      computerWon.classList.remove('draw');
      playerWon.classList.remove('lose'); 
      computerWon.classList.remove('win');
      playerWon.classList.add('win'); 
      computerWon.classList.add('lose');
      player_score.src=`./img/${playerWin}.png`;

      //playerWon.classList.add('win');
      break;
    case "loss":
      computerWin++;
      computer_score.src=`./img/${computerWin}.png`;
      playerWon.classList.remove('draw'); 
      computerWon.classList.remove('draw');
      playerWon.classList.remove('win'); 
      computerWon.classList.remove('lose');
      computerWon.classList.add('win');
      playerWon.classList.add('lose'); 
      break;
    case "draw":
      computerWon.classList.add('draw');
      playerWon.classList.add('draw'); 
      draw++;
      break;
  }
}

function game(player) {
    if (playerWin == 5 || computerWin == 5) {
        document.getElementById("button").disabled = true; 
    }

  if (playerWin != 6 && computerWin != 6) {
    let computerSelection = computerPlay();
    playerSelection = player;
    computer_choice.src=`./img/${computerSelection}.png`;
    
   
    
      let results = playRound(playerSelection, computerSelection);
      getRoundWinner(results, playerSelection, computerSelection);
    
  }

  getOverallWinner(win, loss, draw);
}

const btn = document.querySelectorAll("button");

const choice = document.querySelectorAll(".choice");

const player_choice = document.querySelector("#player_choice");

const player_score = document.querySelector("#player_score");

const computer_choice = document.querySelector("#computer_choice");

const computer_score = document.querySelector("#computer_score");



btn.forEach(btn => {
  btn.addEventListener("click", function(e) {
    game(btn.id);
    player_choice.src=`./img/${btn.id}.png`;
  });
});
