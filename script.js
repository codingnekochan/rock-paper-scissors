// score display on ui
const playerScore = document.getElementById('player_score');
playerScore.textContent= 0;
const computerScore = document.getElementById('cmptr_score');
computerScore.textContent = 0;
//game winner display on ui
const gameWinner = document.getElementById('rps_game--winner')
const announcement = document.createElement('p')
gameWinner.appendChild(announcement);
// score initialization at start of game
let playerCount = 0;
let computerCount = 0;
// for each button
const buttonRock =document.getElementById('rock')
const buttonPaper =document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
// for a single round of rock paper scissors gamer
const roundWinner = document.getElementById('rps_rnd--winner');
const para = document.createElement('p');
roundWinner.appendChild(para);
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button)=>
button.addEventListener('click',()=>{  
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    // this code block is the value returned when player makes choice
    function getPlayerChoice(){
        let playerChoice = button.id;
        return playerChoice;
    }
    // this code block selects computer choice at random
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
    // function block to determine winner of a round 
    function playRound(playerSelection,computerSelection){
        if(playerSelection === "rock"&& computerSelection ==="scissors"){
            para.textContent= "You chose rock and Mr Computer chose scissors.You win!"
            }
        else if(playerSelection==="scissors"&& computerSelection==="paper"){
            para.textContent= "You chose scissors and Mr Computer chose paper.You win!"
        }
        else if(playerSelection==="paper" && computerSelection==="rock"){
            para.textContent= ("You chose paper and Mr Computer chose rock.You win!")
        }
        else if(playerSelection === "rock"&& computerSelection ==="paper"){
            para.textContent= "You chose rock and Mr Computer chose paper.Mr Computer wins!"
        }
        else if (playerSelection==="scissors"&& computerSelection==="rock"){
            para.textContent= "You chose scissors and Mr Computer chose rock.Mr Computer wins!"
        }
        else if(playerSelection==="paper" && computerSelection==="scissors"){
            para.textContent= "You chose paper and Mr Computer chose scissors.Mr Computer wins!"
        }
        else {
            para.textContent= "You both chose the same objects.It's a tie!"
        }
    }
     playRound(playerSelection, computerSelection);
    //  this code block is to update scores;
    // for player score
    function playerScoreCounter(){
        if(
            (playerSelection === "rock"&& computerSelection ==="scissors")
        ||(playerSelection==="scissors"&& computerSelection==="paper")
        ||(playerSelection==="paper" && computerSelection==="rock")
        ){
            playerCount++; 
            playerScore.textContent = playerCount;         
        }
    }
    playerScoreCounter()
   function computerScoreCounter(){
        if(
            (playerSelection === "rock"&& computerSelection ==="paper")
        ||(playerSelection==="scissors"&& computerSelection==="rock")
        ||(playerSelection==="paper" && computerSelection==="scissors")
        ){
            computerCount++; 
            computerScore.textContent = computerCount;         
        }
    }
   computerScoreCounter()
   // game ender

   if (playerCount === 5 && computerCount < 5){
       playerCount=0;
       computerCount = 0;
       buttonRock.disabled = true;
       buttonPaper.disabled = true;
       buttonScissors.disabled = true;
       announcement.textContent = "Congratulations! You win! Would you like to play again?"
   }
   if (computerCount === 5 && playerCount < 5){
      computerCount= 0;
      playerCount = 0;
      buttonRock.disabled = true;
      buttonPaper.disabled = true;
      buttonScissors.disabled = true;
      announcement.textContent = "Oops! You've been defeated! Play again?"
   }
}));

 // game reset on play again button
function resetGame(){
    announcement.textContent = "";
    para.textContent = "";
    playerScore.textContent= playerCount;
    computerScore.textContent= computerCount;
    buttonRock.disabled =false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
}
const playAgain = document.getElementById('reset')
playAgain.addEventListener('click', resetGame);


