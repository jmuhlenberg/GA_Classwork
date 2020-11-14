<?php

class Person {
    public $id;
    public $name;
    public $age;
    public function __construct($id, $name, $age) {
        $this->id = $id;
        $this->name = $name;
        $this->age = $age;
    }
}

class People {
  static function all(){
    //create an empty array
    $people = array();

    //query the database
    $results = pg_query("SELECT * FROM people");

    $row_object = pg_fetch_object($results);
    while($row_object !== false){

      $new_person = new Person( //create a new person
        intval($row_object->id), // initally presented as a string - intval() changes the value to an integer
        $row_object->name,
        intval($row_object->age)
      );
      $people[] = $new_person; //push new person object onto $people array

      $row_object = pg_fetch_object($results);
    }

    return $people;
  }
}

$new_person = new Person(
    intval($row_object->id),
    $row_object->name,
    intval($row_object->age)
);

?>
