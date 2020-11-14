<?php
$dbconn = pg_connect("host=localhost dbname=contacts user=postgres password=Custom13");

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

    static function delete($id){
        $query = "DELETE FROM people WHERE id = $1";
        $query_params = array($id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function update($updated_person){
        $query = "UPDATE people SET name = $1, age = $2 WHERE id = $3";
        $query_params = array($updated_person->name, $updated_person->age, $updated_person->id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function create($person){
        $query = "INSERT INTO people (name, age) VALUES ($1, $2)";
        $query_params = array($person->name, $person->age);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function all(){
        $people = array();

        $results = pg_query("SELECT * FROM people ORDER BY id ASC");
        $row_object = pg_fetch_object($results);

        while($row_object !== false){

            $new_person = new Person(
                intval($row_object->id),
                $row_object->name,
                intval($row_object->age)
            );

            $people[] = $new_person;

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
    }
}
?>
