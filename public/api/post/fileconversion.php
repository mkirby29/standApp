<?php

$thing = $_FILES['audio'];
$name = $_POST['id'];
$destination_path = getcwd().DIRECTORY_SEPARATOR;
print($destination_path);

$target_file = $destination_path."post/sounds/audio.mp3";

move_uploaded_file($_FILES['audio']['tmp_name'], $target_file);

require_once('get/store_audio.php');

if(empty($_GET)){ 
	$output['errors'] = 'missing data';
}

$audioName=$_GET['audio_name'];
$duration=$_GET['audio_duration'];
$userId=$_GET['user_id'];

$query = "INSERT INTO `audio`(`audio_name`, `audio_duration`, `user_id`) VALUES ('$audioName', '$duration', '$userId')";

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