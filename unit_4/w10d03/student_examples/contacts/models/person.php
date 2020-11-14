<?php
$dbconn = pg_connect("host=localhost dbname=contacts");

class Person {
    public $id;
    public $name;
    public $age;

    public function __construct($id, $name, $age){
        $this->id = $id;
        $this->name = $name;
        $this->age = $age;

    }
}

class People {
  static function create($person){
    $query = "INSERT INTO people (name, age) VALUES ($1, $2)";
    $query_params = array($person->name, $person->age);
    pg_query_params($query, $query_params); //pass the query and the params to pg_query_params
    return self::all();
  }

<<<<<<< HEAD
  static function update($updated_person){
    $query = "UPDATE people SET name = $1, age = $2 WHERE id = $3";
    $query_params = array($updated_person->name, $updated_person->age, $updated_person->id);
    pg_query_params($query, $query_params);

    return self::all();
  }

  static function delete($id){
    $query = "DELETE FROM people WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);
=======
        $results = pg_query("SELECT * FROM people");
        $row_object = pg_fetch_object($results);

        while($row_object !== false){
>>>>>>> 7122ff505894ddcfdc6627c26688dff03e86d1e1

    return self::all();
}

  static function all(){
    $people = array();

    // $person1 = new Person(1, 'Bob', 32);
    // $person2 = new Person(1, 'Bob', 32);
    // $person3 = new Person(1, 'Bob', 32);
    //
    // $people[] = $person1;
    // $people[] = $person2;
    // $people[] = $person3;

    $results = pg_query("SELECT * FROM people");

    $row_object = pg_fetch_object($results); //i=0
    while($row_object !== false){ //i<5

<<<<<<< HEAD
      $new_person = new Person(
        intval($row_object->id),
        $row_object->name,
        intval($row_object->age)
      );

      $people[] = $new_person;

      $row_object = pg_fetch_object($results);//i++

=======
            $row_object = pg_fetch_object($results);
        }

        // $person1 = new Person(1, 'Bob', 32);
        // $person2 = new Person(2, 'Matt', 40);
        // $person3 = new Person(3, 'Sally', 60);
        //
        // $people[] = $person1;
        // $people[] = $person2;
        // $people[] = $person3;

        return $people;
>>>>>>> 7122ff505894ddcfdc6627c26688dff03e86d1e1
    }

    return $people;
  }
}

<<<<<<< HEAD
// call create function
// People::create();


// call update function
$new_person=new Person(1, "Matthew", 29);
People::update($new_person);
=======
>>>>>>> 7122ff505894ddcfdc6627c26688dff03e86d1e1
?>
