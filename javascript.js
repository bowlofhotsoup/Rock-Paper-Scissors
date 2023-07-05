let playerSelection = '';
let computerSelection;
let options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
}

// console.log(getComputerChoice());


function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return 'You Lose!';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return 'You Lose!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return 'You Lose!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return 'You Win!';
    }
    else{
        return 'Invalid entry';
    } 
}

// console.log(playRound(playerSelection, computerSelection));


let playerScore = Number();
let computerScore = Number();

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Please enter Rock, Paper or Scissors');
        console.log(getComputerChoice());
        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection, computerSelection) === 'You Win!'){
            playerScore += 1;
            computerScore += 0;
        }
        else if(playRound(playerSelection, computerSelection) === 'You Lose!'){
            playerScore += 0;
            computerScore += 1;
        }
        else if(playRound(playerSelection, computerSelection) === 'It is a Tie'){
            playerScore += 0;
            computerScore += 0;
        }
    }
}
console.log(game());

function finalWinner(){
    if(playerScore > computerScore){
        return 'You won this game';
    }
    else if(playerScore < computerScore){
        return 'You lost this game';
    }
    else if(playerScore === computerScore){
        return 'It is an overall tie';
    }
}
console.log(finalWinner());
console.log(playerScore);
console.log(computerScore);