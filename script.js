// this is to get the computer to throw its own weapon
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0){
        return "rock";   
    }
    else if (computerChoice === 1){
        return "paper";
    }
    else {
       return "scissors";
    }
}
// the user throw weapon
function getPlayerChoice(){
    let player= prompt("Rock,Paper,Scissors? \n\n Pick a weapon!",);
    const playerChoice = player.toLowerCase()       
    return playerChoice;
}
// function block to determine winner of a round
let counter = 0;      
function playRound(playerSelection,computerSelection){
   
    if(
          (playerSelection === "rock"&& computerSelection ==="scissors")
        ||(playerSelection==="scissors"&& computerSelection==="paper")
        ||(playerSelection==="paper" && computerSelection==="rock")
    ){
        console.log("You win this round!");
        counter++;          
    }
    else if(
          (playerSelection === "rock"&& computerSelection ==="paper")
        ||(playerSelection==="scissors"&& computerSelection==="rock")
        ||(playerSelection==="paper" && computerSelection==="scissors")
    ){
        console.log("You lose this round to Mr Computer!");
    }
    else if (playerSelection === computerSelection){
        console.log("It's a tie!");
    }
    else {
        console.log("Wrong Input!");
    }
    return counter;
}
playRound(getPlayerChoice(),getComputerChoice());

// game(); 
// if (counter >= 3){
//     console.log("You defeated Mr Computer!")
// }
// else{
//     console.log("Oops! Try again")
// }
