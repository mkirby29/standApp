<?php
require_once('../../config/db.php');
require_once('db_connect.php');
$output=[];
$_POST = json_decode(file_get_contents('php://input'), true);

$email=$_POST['email'];


$query = "SELECT `id` FROM `users` WHERE `email` = '$email'";

// $result = mysqli_query($conn, $query);
// if (empty($result)) {
//     $output['errors'] = 'Database Error';
// } else {
// 	$output['success'] = true;
// 	$id = mysqli_fetch_field($result);
// 	$id = json_encode($id);
// 	print_r($id);
// }

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0 ) {
  $output['data']=[];
  while( $row = mysqli_fetch_assoc($result) ){
      $output['data'][] = $row;
  }
} else {
  $output['errors'][] = 'Invalid Search ID. No data.';
}

$jsonOutput = json_encode($output);

// if($result = $conn->query($query)){
// 	while($row = fetchAssocStatement($result)){
// 		$result[]=$row;
// 	}
// 	$jsonOutput = json_encode($result);
// 	print_r($jsonOutput);
// }else{
// 	print('bad query');
// }

$result->close();
$conn->close();

?>