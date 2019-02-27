
function computerPlay() {
    let computerRandom = Math.floor(Math.random()*3);
    if(computerRandom == 0){
        return computerSelection = 'rock'
    } else if(computerRandom == 1) {
        return computerSelection = 'paper'
    } else {
        return computerSelection = 'scissors'
    } 
}

function singleRound(playerSelection){
    if(gameOver){
    } else {
        computerPlay()
        if(computerSelection == playerSelection){ 
            result.textContent = "It's a draw!";
        } else if((computerSelection == 'rock' && playerSelection == 'paper')||
            (computerSelection == 'paper' && playerSelection == 'scissors') ||
            (computerSelection == 'scissors' && playerSelection == 'rock')) {
                ++playerScore
                result.textContent = 'You win this round! ' + playerSelection + ' beats ' + computerSelection;    
        } else if((computerSelection == 'rock' && playerSelection == 'scissors')||
            (computerSelection == 'paper' && playerSelection == 'rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper')) {
                ++computerScore
                result.textContent = 'You lose this round! ' + computerSelection + ' beats ' + playerSelection;         
            }
        score.textContent = 'Current Score: Humans ' + playerScore + ' - ' + computerScore + ' Computers';         
        checkForWinner();
    }
}

function checkForWinner() {
    if(playerScore == 5) {
    score.textContent =  'Final Score: Humans ' + playerScore + ' - ' + computerScore + ' Computers'
    result.textContent = 'Skynet, C3PO, HAL...your boys just took one hell of a beating.'
    gameOver = true;
    } else if(computerScore == 5) {
    score.textContent = 'Final Score: Humans ' + playerScore + ' - ' + computerScore + ' Computers';
    result.textContent = 'I, for one, salute our new digital overlords!'
    gameOver = true;
    }
}

function reset (){
    playerScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = '';
    gameOver = false;
}

const results = document.querySelector('#results');
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
let score = document.createElement('p');
results.appendChild(score);
let result = document.createElement('p');

results.appendChild(result);




const playerChoices = document.querySelectorAll('.picture');
playerChoices.forEach((playerChoice) => {
    playerChoice.addEventListener('click', e => singleRound(playerChoice.id));
})