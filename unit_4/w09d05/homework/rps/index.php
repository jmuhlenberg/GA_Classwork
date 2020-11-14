<?php

function playRPS(){

  echo "Let's play a game of Rock Paper Scissors. Make a choice: rock (R) / paper (P) / scissors (S)";

  //assign values
  $rock = 1;
  $paper = 2;
  $scissors = 3;

  //accept player input
  $player = trim(fgets(STDIN));

  //based on input assign value
  if($player == 'r'){
    $player = $rock;
    // echo $player;
  } else if ($player == 'p'){
    $player = $paper;
    // echo $player;
  } else if ($player == 's'){
    $player = $scissors;
    // echo $player;
  } else {
    echo "Invalid selection. For rock please enter 'R'. For paper please enter 'P'. For scissors please enter 'P'.";
    playRPS();
  };

  //random computer value
  $computer = rand(1, 3);

  //outcomes
  if($player == $computer){
    echo "Draw! \n";
    echo $player;
    echo $computer;
  }else if($player == $rock){
    echo "player chose rock";
    if($computer == $paper){
      echo "Computer wins!";
    }else{
      echo "Player wins!";
    }
  }else if($player == $paper){
    echo "player chose paper";
    if($computer == $rock){
      echo "Player wins!";
    }else{
      echo "Computer wins!";
    }
  }else{
    echo "player chose scissors";
    if($computer == $paper){
      echo "Player wins!";
    }else{
      echo "Computer wins!";
    }
  };

}

playRPS();

 ?>
