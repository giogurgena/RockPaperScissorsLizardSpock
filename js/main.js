let userScore = 0;
let computerScore = 0;

const user = document.querySelector('.user-score');
const computer = document.querySelector('.computer-score');
const resultText = document.querySelector('.sub-title');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
};

getComputerChoice();

win = (userChoice, computerChoice) => {
  userScore++;
  user.innerHTML = userScore;
  computer.innerHTML = computerScore;
  resultText.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
};

lost = (userChoice, computerChoice) => {
  computerScore++;
  user.innerHTML = userScore;
  computer.innerHTML = computerScore;
  resultText.innerHTML = `${userChoice} looses to ${computerChoice}. You lost!`;
};

tie = (userChoice, computerChoice) => {
  resultText.innerHTML = `${userChoice} equals ${computerChoice}. It's a tie!`;
};

game = userChoice => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'rocklizard':
    case 'paperrock':
    case 'paperspock':
    case 'scissorspaper':
    case 'scissorslizard':
    case 'spockscissors':
    case 'spockrock':
    case 'lizardspock':
    case 'lizardpaper':
      win(userChoice, computerChoice);
      break;

    case 'rockpaper':
    case 'rockspock':
    case 'paperlizard':
    case 'paperscissors':
    case 'scissorsrock':
    case 'scissorsspock':
    case 'spockpaper':
    case 'spocklizard':
    case 'lizardscissors':
    case 'lizardrock':
      lost(userChoice, computerChoice);
      break;

    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      tie(userChoice, computerChoice);
      break;
  }
};

main = () => {
  rock.addEventListener('click', () => {
    game('rock');
  });
  paper.addEventListener('click', () => {
    game('paper');
  });
  scissors.addEventListener('click', () => {
    game('scissors');
  });
  lizard.addEventListener('click', () => {
    game('lizard');
  });
  spock.addEventListener('click', () => {
    game('spock');
  });
};

main();

// MODAL

const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-button');

modalBtn.addEventListener('click', () => {
  modal.classList.add('hide');
});
