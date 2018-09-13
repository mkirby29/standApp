<?php

$_POST = json_decode(file_get_contents('php://input'), true);

require('../../aws/vendor/autoload.php');

use Aws\S3\S3Client;

$bucket = 'standup618';
$keyname = $_POST['audio_name'];

$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-west-1'
]);

// Delete an object from the bucket.
$s3->deleteObject([
    'Bucket' => $bucket,
    'Key'    => $keyname
]);

if(empty($_GET)){  
	$ouput['errors'] = 'missing data';
}
$query = "DELETE FROM `audio` WHERE `audio_name` = '$keyname'";

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