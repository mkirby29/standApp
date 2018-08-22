<?php
// print_r($_GET);
$query = 'SELECT u.user_id, audio_name, username, likes FROM users AS u JOIN audio AS a ON u.user_id = a.user_id JOIN user_feedback AS f ON f.audio_id = a.audio_id';

$result = mysqli_query($conn, $query);


if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['audio'][] = $row;
    }
    $output['success'] = true;

} else {    
        $output['message'] = 'No Items';
    }
?>