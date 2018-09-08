<?php




if(empty($_GET)){  
	$ouput['errors'] = 'missing data';
}
$query = "DELETE FROM `audio` WHERE `audio_id` = {$_GET['id']}";

$result = mysqli_query($conn, $query);

if(empty($result)){ 
	$output['errors'] = 'database error';
}else {
	if(mysqli_affected_rows($conn)){
		$output['success'] = true;
	}else {
		$output['errors'] = 'delete error';
	}	
}



?>