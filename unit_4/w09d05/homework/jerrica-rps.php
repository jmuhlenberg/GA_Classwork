<?php
    // declaring the moves  
    $moves = array("rock", "paper", "scissors");

    // start the game 
    echo "Welcome to rock paper scissors, player please type your choice: rock, paper, scissors? \n";

    // get user move
    $userMove = strtolower(trim(fgets ( STDIN )));

    // randomly generate generate computer's move 
    $random = array_rand($moves);
    $computerMove = $moves[$random];

    // check the input
    if($userMove === $computerMove) {
        $winner = 'a tie!';
    } elseif ($userMove === $moves[0] && $computerMove === $moves[1]) {
        $winner = 'Computer!';
    } elseif ($userMove === $moves[0] && $computerMove === $moves[2]) {
        $winner = 'Player!';
    } elseif ($userMove === $moves[1] && $computerMove === $moves[0]) {
        $winner = 'Player!';
    } elseif ($userMove === $moves[1] && $computerMove === $moves[2]) {
        $winner = 'Computer!';
    } elseif ($userMove === $moves[2] && $computerMove === $moves[0]) {
        $winner = 'Computer!';
    } elseif ($userMove === $moves[2] && $computerMove === $moves[1]) {
        $winner = 'Player!'; 
    } else {
        $winner = 'No one, your input was invalid! Please try again.';
    }

    // display the game info 
    echo "Player used: $userMove \n";
    echo "Computer used: $computerMove \n";
    echo "Winner is: $winner \n";
?>
