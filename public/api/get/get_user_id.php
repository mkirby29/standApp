<?php

$username=$_POST['username'];

$query = "SELECT `id` FROM `users` WHERE `username` LIKE '$username'";

$result = mysqli_query($conn, $query);

if (empty($result)) {
    $output['errors'] = 'Database Error';
} else { 
	if(mysqli_affected_rows($conn)){
		$output['success'] = true;
	}else {
		$output['errors'] = 'failed no data';
	}
}

?>