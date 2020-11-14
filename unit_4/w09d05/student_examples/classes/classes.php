<?php

class World{
  private $codename = 'x6yn444';
  public $size = 'Medium';  // can be accessed outside of class definition
  public function __construct($world_name, $shape= "oblate spheroid"){
    $this->name = $world_name;
    $this->shape = $shape;
  }
  public function getCodeName() {
    return $this->codename;
  }
}

// $world = new World();

// print_r($world);  //prints all details of the $world object
// print_r($world->size); //can access the value of this variable because it's 'public'
// print_r($world->codename); // error!

// We can update the public properties very easily:
// print_r($world);
// $world->size = 'Small';
// print_r($world->size);


//To get the values or set the values of our private members, we'll need to write methods to do so. Let's write one to get the value. (added on line 10)
// print_r($world->getCodeName());


//The constructor function will run when we create (instantiate) our object. Let's add it to our code. (added on line 6)
// $world = new World("Nothing But Shrimp");
// print_r($world);




////////
//YOU DO
////////

// make a new class Person

// a person should have publicly accessible name, age and occupation

// each object you should be able to set the name, age and occupation
// if no age is included, set the age to 85

// if no occupation is included, set the occupation to 'Student'

// Bonus in your world class create a new private member people that will be an array. Create a public method populate that will push people objects into this array. Finally, create a public method census that will print_r the people array

// class Person{
//   private $SSN = '123-45-1234';
//   private $friends = ['Atticus'];
//   public function __construct($person_name, $age=85, $job='Student'){
//     $this->name = $person_name;
//     $this->age = $age;
//     $this->job = $job;
//   }
//   public function makeFriends() {
//     array_push($this->friends, "John", "Mary");
//   }
// }

// $watson = new Person('Watson', 1, 'Lazy Cat');
// print_r($watson);

// print_r($watson->makeFriends());
// print_r($watson);



class Galaxy {
  static protected $planets = array();
  static public function create ($name) {
    $new_planet = new World($name);
    self::$planets[] = $new_planet;
    return $new_planet;
  }

  static public function find($index) {
    return self::$planets[$index];
  }
}

$tatooine = Galaxy::create('Tatooine');
// print_r($tatooine);
// print_r(Galaxy::find(0));




$our_planets = array(
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto"
);

foreach ($our_planets as $planet) {
  Galaxy::create($planet);
}

// print_r(Galaxy::find(3));
// print_r(Galaxy::find(8));




//////////////
// INHERITANCE
//////////////

class Car {
	protected $wheels; //accessible by child class, not outside class, though
	private $engine = "off"; //unaccessible by child class
	public function __construct($num_wheels){
		$this->wheels = $num_wheels;
	}
	public function getWheels(){
		return $this->wheels;
	}
	public function start(){
		$this->engine = "on";
	}
}

class Humvee extends Car {
	protected $armour = 10;
	public function takeDamage($damage){
		$this->armour -= $damage;
	}
	public function loseWheel(){
		$this->wheels--; //can access parent class $wheels member because it is protected
	}
	//can overwrite or even extend parent's start function
	public function start(){
		$this->radio = "WELCOME TO THE JUNGLE!";
		//$this->engine = "on" //creates separate property on Humvee, doesn't manipulate parent class prop
		parent::start(); //run parent's start function
	}
}

$my_humvee = new Humvee(6);
print_r($my_humvee);
$my_humvee->loseWheel();
print_r($my_humvee);
$my_humvee->takeDamage(6);
print_r($my_humvee);
$my_humvee->start();
print_r($my_humvee);


?>
