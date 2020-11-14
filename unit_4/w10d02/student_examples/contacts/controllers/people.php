<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/person.php';

if($_REQUEST['action'] === 'index'){
  json_encode(People::all())
}

?>
