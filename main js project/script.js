 function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="scissors"){ 
    playerScore++;
    return "Player won! Rock beats Scissors. ";
  }
  else if (playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="paper" ){
    computerScore++;
    return "Player lost! Paper beats Rock. ";
  }
 else if(playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="rock"){
    playerScore++;
    return "Player won! Paper beats Rock. ";
  } 
 else if (playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="scissors"){
    computerScore++;
    return "Player lost! Scissors beats Paper. ";
  }
  else if(playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="paper"){
    playerScore++;
    return "Player won! Scissors beats Paper. ";
  }
  else if(playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="rock"){
    computerScore++;
    return "Player lost! Rock beats Scissors. "
  } 
  else if (playerSelection.toLowerCase() == computerSelection[computerPlay]){
    tieScore++;
    return "Tie!";
  }
  else {
    return "you must input rock, paper or scissors";
  } 
  }
  let computerSelection = ["rock","paper","scissors"];
  let computerPlay= Math.floor(Math.random()*computerSelection.length); 
  let playerScore=0;
  let computerScore=0;
  let tieScore=0;
  function game() {  
    for (let i = 0; i <5; i++) { 
     let playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'"); 
     console.log ("Player: " +playerSelection.toLowerCase());
     console.log("Computer: " + computerSelection[computerPlay]);
     console.log(playRound(playerSelection, computerSelection));}
     if (playerScore>computerScore){
        return "Player Won!🎉";}    
    if (playerScore==computerScore){
          return "This game is Tie!🫱🏾‍🫲🏻";}
    else{
        return "Player Lose!😢";}
   }
   console.log(game());
   console.log( "Player Score is " +playerScore +" Won " +computerScore +" Lost " +tieScore +" Tie.\n");
   console.log("GAME OVER!!🙌🏻");
   