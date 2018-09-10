<?php

$token=$_POST['token'];
$avatar=$_POST['avatar'];

$query = "INSERT INTO `users`(`token`, `avatar`) VALUES ('$token', '$avatar')";

$result = mysqli_query($conn, $query);

if(empty($result)){ 
	$output['errors'] = 'database error';
}else { 
	if(mysqli_affected_rows($conn)){
		$output['success'] = true;
	}else {
		$output['errors'] = 'failed to add user error';
	}
}

?>