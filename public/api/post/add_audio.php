<?php

$thing = $_FILES['audio'];
$name = $_POST['id'];
$destination_path = getcwd().DIRECTORY_SEPARATOR;
print($destination_path);

$target_file = $destination_path."post/sounds/audio.mp3";

move_uploaded_file($_FILES['audio']['tmp_name'], $target_file);

require_once('get/store_audio.php');

if(empty($_POST)){ 
	$output['errors'] = 'missing data';
}

$avatar=$_POST['avatar_id'];
$author=$_POST['author_name'];
$audioName=$_POST['audio_name'];
$duration=$_POST['audio_duration'];

$query = "INSERT INTO `audio`(`avatar_id`, `author_name`, `audio_name`, `audio_duration`) VALUES ('$avatar', '$author', '$audioName', '$duration')";

$result = mysqli_query($conn, $query);


if(empty($result)){ 
	$output['errors'] = 'database error';
}else { 
	if(mysqli_affected_rows($conn)){
		$output['success'] = true;
	}else {
		$output['errors'] = 'insert error';
	}
}

?>