<?php

$thing = $_FILES['audio'];
$name = $_POST['id'];
$destination_path = getcwd().DIRECTORY_SEPARATOR;
print($destination_path);

$target_file = $destination_path."post/sounds/audio.mp3";

move_uploaded_file($_FILES['audio']['tmp_name'], $target_file);

require_once('get/store_audio.php');
// unlink($target_file);
// file_put_contents('./sounds/thatTHANG.mp3', $thing);
// var_dump($thing);
?>