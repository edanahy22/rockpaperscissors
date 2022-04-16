var R = "Rock";
var P = "Paper";
var S = "Scissors";
var options = ["Rock", "Paper", "Scissors"]


// var tie = 0;


var playerChoice = prompt('Choose Rock, Paper, or Scissors');



var index = Math.floor(Math.random() * options.length);
var computerChoice = (options[index]);


//if (playerChoice === computerChoice) {
//     console.log("Lunchtime");
//   } else {
//     console.log("Not Lunchtime");
//   }

  // if p2 plays R and p1 plays R = tie