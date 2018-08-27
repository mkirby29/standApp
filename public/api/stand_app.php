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
        // require_once('get/'.$action.'.php');
        require_once('get/retrieve_audio.php');
        // require_once('get/get_bucket.php');
        // require_once('get/store_audio.php');
        // require_once('get/convert_and_store.php');
        break;
    case 'add_item':
        // require_once('post/'.$action.'.php');
        require_once('post/fileconversion.php');
        break;
    case 'delete_item':
        require_once('delete/'.$action.'.php');
        break;
    // case 'PATCH':
    //     $_PATCH = json_decode(file_get_contents('php://input'), true);
    //     require_once('patch/'.$action.'.php');
    //     break;
    case 'PUT':
        $output['message'] = 'PUT request made';
        break;
    default:
        $output['Error'] = 'Unknown request made';

}

// switch($action) {
//     case 'get_all':
//         require_once 
// }

$output = json_encode($output);

print $output;



?>