<?php
include_once __DIR__ . '/../models/activity.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_REQUEST['action'] === 'index') {
  echo json_encode(Activities::all());
} elseif ($_REQUEST['action'] === 'post') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_activity = new Activity(null, $body_object->name, $body_object->description, $body_object->difficulty, $body_object->time);
  $all_activities = Activities::create($new_activity);
  echo json_encode($all_activities);
} else if ($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_activity = new Activity($_REQUEST['id'], $body_object->name, $body_object->description, $body_object->difficulty, $body_object->time);
  $all_activities = Activities::update($updated_activity);
  echo json_encode($all_activities);
  } else if ($_REQUEST['action'] === 'delete') {
    $all_activities = Activities::delete($_REQUEST['id']);
    echo json_encode($all_activities);
  }

 ?>
