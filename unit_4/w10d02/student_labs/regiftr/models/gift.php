<?php

class Gift {
  public $id,
  public $name;
  public $description;
  public $value;
  public $receivedAt;
  public $receivedFrom;

  public function __construct($id, $name, $description, $value, $receivedAt, $receivedFrom){
    $this->id = $id
    $this->name = $name;
    $this->description = $description;
    $this->value = $value;
    $this->receivedAt = $receivedAt;
    $this->receivedFrom = $receivedFrom;
  }

}

class Gifts {
  static function all(){
    $gifts = array();

    $results = pg_query("SELECT * FROM gifts");

    $row_object = pg_fetch_object($results);
    while($row_object !== false){
      $new_gift = new Gift(
        $row_object->name,
        $row_object->description,
        $row_object->value,
        $row_object->receivedAt,
        $row_object->receivedFrom
      );

      $gifts[] = $new_gift;

      $row_object = pg_fetch_object($results)

    }
    return $gifts;
  }

  static function create($gift){
    $query = "INSERT INTO gifts (name, description, value, receivedAt, receivedFrom) VALUES ($1, $2, $3, $4, $5)";
    $query_params = array($gift->name, $gift->description, $gift->value, $gift->receivedAt, $gift->receivedFrom);
    pg_query_params($query, $query_params);
    return self::all();
  }

  static function update($updated_gift){
    $query = "UPDATE gifts SET name = $1, description = $2, value = $3, receivedAt = $4, receivedFrom = $5 WHERE id = $6";
    $query_params = array($updated_gift->name, $updated_gift->description, $updated_gift->value, $updated_gift->receivedAt, $updated_gift->receivedFrom, $updated_gift->id);
    pg_query_params($query, $query_params);

    return self::all();
  }

  static function delete($id){
    $query = "DELETE FROM gifts WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::all();
  }
}

 ?>
