<?php
// require("../../aws/vendor/autoload.php");
require($_SERVER['DOCUMENT_ROOT']."/aws/vendor/autoload.php");
require('secret_key.php');

use \CloudConvert\Api;

$api = new Api("DXWkkBroENo3TshWc0UHOvgElvxm1NRXW1CThd4f4s5uiPgE3jrq5VWbn02Y6wr4");
 
$process = $api->createProcess([
    "inputformat" => "jpg",
    "outputformat" => "pdf",
]);




// $process->start([
//     "input" => [
//         "s3" => [
//             "accesskeyid" => $key,
//             "secretaccesskey" => $secret,
//             "bucket" => "my337338"
//         ],
//     ],
//     "file" => "../bucket/logo.jpg",
//     "outputformat" => "pdf",
//     "output" => [
//         "s3" => [
//             "accesskeyid" => $key,
//             "secretaccesskey" => $secret,
//             "bucket" => "my337338",
//         ],
//     ],
// ]);
?>