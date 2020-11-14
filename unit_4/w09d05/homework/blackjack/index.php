<?php

class BlackJack{

  //set player info
  public function __construct($name){
    $this->name = $name;
  }
  public $playerBank = 0;
  public $playerHand = array();
  public $dealerHand = array();
  public $playerValue = 0;
  public $dealerValue = 0;


  public $cards = array(2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11);
  public $deck = array();

  public function shuffleDeck(){
    //create the deck
    $this->createDeck();
    //shuffle 7 times for good luck
    for($k=0; $k<7; $k++){
      shuffle($this->deck);
    }
    // print_r($this->deck);
  }

  public function createDeck(){
    $this->deck = array_merge($this->cards, $this->cards, $this->cards, $this->cards);
  }

  public function dealDealer(){
    array_push($this->dealerHand, array_pop($this->deck));
  }

  public function dealPlayer(){
    array_push($this->playerHand, array_pop($this->deck));
  }

  public function handValue($hand){
    return array_sum($hand);
  }

  //compare player value vs dealer value
  public function compareValues($player, $dealer){
    if($player > $dealer){
      echo "You won! Play again? (yes/no)";
      $this->gameEnd();
    }else{
      echo "Dealer won. Play again? (yes/no)";
      $this->gameEnd();
    }
  }

  //play again?
  public function gameEnd(){
    $response = trim(fgets(STDIN));
    if($response == 'yes'){
      $this->beginGame();
      $this->playerHand = array();
      $this->dealerHand = array();
    }else{
      echo 'Thanks for playing!';
    }
  }



  public function hitStay(){
    $response = trim(fgets(STDIN));
    if($response == 'h'){
      $this->dealPlayer();
    }else{
      return;
    }
  }

  public function checkValue($hand){
    if($hand > 21){
      echo 'Bust. Play again? (yes/no)';
      $this->endGame();
    }else if($hand == 21){
      echo 'Black Jack, you won! Play again? (yes/no)';
      $this->endGame();
    }elseif($hand < 21){
      echo "Hit or stay? (H/S)";
      $this->hitStay();
    }
  }

  public function beginGame(){

    $this->playerValue = 0;
    $this->dealerValue = 0;

    $this->shuffleDeck();

    for($t=0; $t<2; $t++){
      $this->dealPlayer();
      $this->dealDealer();
    }

    // print_r($this->playerHand);
    // print_r($this->dealerHand);

    //get hand values
    $this->playerValue = $this->handValue($this->playerHand);
    print_r($this->playerValue);
    $this->dealerValue = $this->handValue($this->dealerHand);
    print_r($this->dealerValue);

    //outcomes
    $this->compareValues($this->playerValue, $this->dealerValue);

  }

}

$new_BlackJack = new BlackJack('John');
$new_BlackJack->beginGame();



 ?>
