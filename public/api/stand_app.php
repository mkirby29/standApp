<?php
header("Access-Control-Allow-Origin: *");
$output = [
    'success' => false
];

require_once('db_connect.php');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'];

switch($method) {
    case 'GET': 
        require_once('get/'.$action.'.php');
        require_once('get/convert_and_store.php');
        break;
    case 'POST':
        require_once('post/'.$action.'.php');
        break;
    case 'PUT':
        $output['message'] = 'PUT request made';
        break;
    case 'PATCH':
        $_PATCH = json_decode(file_get_contents('php://input'), true);
        require_once('patch/'.$action.'.php');
        break;
    case 'DELETE':
        $output['message'] = 'DELETE request made';
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