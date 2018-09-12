<?php

// takes in audio ID and changes table...
// { HEARTS } check if fill or not. and toggle accordingly
// { AUDIO } get current likes counter and +1

$name = $_POST['audio_name'];
$id = $_POST['id'];

$query = "UPDATE `audio` SET `likes`=(`likes`+1) WHERE `audio_name`=$name"; 

$result1 = mysqli_query($conn, $query);


if(empty($result1)){  
	$output['errors'] = 'database error';
}else { 
	if(mysqli_affected_rows($conn)){
		$output['success'] = true;
	}else {
		$output['errors'] = 'update error';
	}
}

$audioName = "SELECT `id` FROM `audio` WHERE `audio_name`= $name";

$audioId = mysqli_query($conn, $audioName);
$checkFeedback = "SELECT `user_feedback` FROM `user_feedback` WHERE `user_id`=$id AND `audio_id`= $audioId";
$addFeedback = "INSERT INTO `user_feedback`(`user_id`, `audio_id`) VALUES ('$id', '$audioName')";
$deleteFeedback = "DELETE FROM `user_feedback` WHERE `user_id` = '$id' AND `audio_id` = '$audioName'";

$result2 = mysqli_query($conn, $checkFeedback);

if(empty($result2)){  
	$output['errors'] = 'database error';
}else {
    if(mysqli_num_rows($result2)>0){
        $delete = mysqli_query($conn, $deleteFeedback);
        return true;
    }else {      
        $add = mysqli_query($conn, $addFeedback);
        return false;
    }
}

?>