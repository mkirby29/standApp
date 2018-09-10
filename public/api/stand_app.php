<?php
header("Access-Control-Allow-Origin: *");
$output = [
    'success' => false
];

require_once('db_connect.php');

// $method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'];

switch($action) {
    case 'get_all': 
        require_once('get/retrieve_audio.php');
        break;
    case 'get_single_audio': 
        require_once('get/get_single_audio.php');
        break;
    case 'add_item':
        require_once('post/add_audio.php');
        break;
    case 'delete_item':
        require_once('delete/delete_item.php');
        break;
    case 'PUT':
        $output['message'] = 'PUT request made';
        break;
    case 'add_new_user':
        require_once('post/add_new_user.php');
        break;
    case 'add_avatar':
        require_once('post/add_avatar.php');
        break;
    case 'retrieve_avatars':
        require_once('get/retrieve_avatars.php');
        break;
    default:
        $output['Error'] = 'Unknown request made';

}

$output = json_encode($output);

print $output;



?>