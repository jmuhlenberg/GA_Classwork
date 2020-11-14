<?php

header('Content-Type: application/json');
include_once __DIR__ . '/../models/gift.php';

if($_REQUEST['action']==='index'){
  json_encode(Gifts::all())
}else if ($_REQUEST['action']==='create'){
  $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $new_gift = new Gift(null, $body_object->name, $body_object->description, $body_object->value, $body_object->receivedAt, $body_object->receivedFrom);
    Gifts::create($new_gift);
    echo '{"worked":true}';

}else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $updated_gift = new Gift($_REQUEST['id'], $body_object->name, $body_object->description, $body_object->value, $body_object->receivedAt, $body_object->receivedFrom);
    $all_gifts = Gifts::update($updated_gift);
    echo json_encode($all_gifts);

}else if ($_REQUEST['action'] === 'delete'){
    $all_gifts = Gifts::delete($_REQUEST['id']);
    echo json_encode($all_gifts);
}


 ?>
