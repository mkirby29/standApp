<?php

$username=$_POST['username'];
$token=$_POST['token'];
$email=$_POST['email'];

$query = "INSERT INTO `users`(`username`, `token`, `email`) VALUES ('$username', '$token', '$email')";

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