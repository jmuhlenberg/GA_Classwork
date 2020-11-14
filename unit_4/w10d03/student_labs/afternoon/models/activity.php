<?php
$dbconn = pg_connect("host=localhost dbname=selfcare");
class Activity {
  public $id;
  public $name;
  public $description;
  public $difficulty;
  public $time;
  public function __construct($id, $name, $description, $difficulty, $time){
    $this->id = $id;
    $this->name = $name;
    $this->description = $description;
    $this->difficulty = $difficulty;
    $this->time = $time;
  }
}
class Activities {
  static function all(){
    $activities = array();
    $results = pg_query("SELECT * FROM activities");
    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_activity = new Activity(
        intval($row_object->id),
        $row_object->name,
        $row_object->description,
        $row_object->difficulty,
        $row_object->time
      );
      $activities[] = $new_activity;
      $row_object = pg_fetch_object($results);
    }
    return $activities;
  }
  static function create($activity){
    $query = "INSERT INTO activities (name, description, difficulty, time) VALUES ($1, $2, $3, $4)";
    $query_params = array($activity->name, $activity->description, $activity->difficulty, $activity->time);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function update($updated_activity){
      $query = "UPDATE activities SET name = $1, description = $2, difficulty = $3, time = $4 WHERE id = $5";
      $query_params = array($updated_activity->name, $updated_activity->description, $updated_activity->difficulty, $updated_activity->time, $updated_activity->id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
    static function delete($id){
      $query = "DELETE FROM activities WHERE id = $1";
      $query_params = array($id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
}
 ?>
