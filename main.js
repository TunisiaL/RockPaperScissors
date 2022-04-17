const selections = ["ROCK", "PAPER","SCISSORS"];
const winners = [];

function game() {
    for (let i = 0; i <=5; i++) {
        playround();
    }
    
}

function playround() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    const winner = checkWinner(computerSelection,playerSelection);+
    console.log('computer chose',computerSelection);
    console.log('player chose',playerSelection);
    console.log(winner);
    winners.push(winner);
}

function computerPlay(){
    return selections[Math.floor(Math.random()* selections.length)];
}

function playerPlay(){
    let input = prompt('Choose Rock, Paper or Scissors' , '');
    while (input == null) {
        input = prompt('Choose Rock, Paper or Scissors' , '');
    }
    input = input.toUpperCase();
    return input;
}


function checkWinner(choiceC , choiceP) {
    if (choiceC == choiceP) {
        return 'Draw';      
    }
    else if (choiceC == 'ROCK' && choiceP == 'PAPER') {
        return 'Player Won';
    }
    else if (choiceC =='ROCK' && choiceP == 'SCISSORS' ) {
        return 'Computer Won';  
    }
    else if (choiceC =='PAPER' && choiceP == 'SCISSORS') {
        return 'Player Won';
    }
    else if (choiceC== 'PAPER' && choiceP == 'ROCK') {
        return 'Computer Won';
    }
    else if (choiceC == 'SCISSORS' && choiceP == 'ROCK') {
        return 'Player Won';
    }
    else if (choiceC == 'SCISSORS' && choiceP == 'PAPER') {
        return'Computer WON';
    }
}

function countWins() {
    console.log(winners);
}

game();