let playerSelection = prompt('Please enter Rock, Paper or Scissors');
let computerSelection;
let options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'It is a Tie';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    else{
        return 'Invalid entry! Please enter Rock, Paper or Scissors';
    } 
}
console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i = 1; i <= 5; i++){
        
    }
}