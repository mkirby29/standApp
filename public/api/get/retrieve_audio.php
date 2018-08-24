<?php

require('../../aws/vendor/autoload.php');
require('secret_key.php');

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

$bucket = 'my337338';
$keyname = 'uploads/betterdays';




$credentials = new Aws\Credentials\Credentials($key, $secret);
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-west-1',
    'credentials' => $credentials,
    'scheme' => 'http'

]);

try {
    // Get the object.
    $result = $s3->getObject([
        'Bucket' => $bucket,
        'Key'    => $keyname,
         
    ]);

    // Display the object in the browser.
   


   
    header("Content-Type: {$result['ContentType']}");
    echo $result['Body'];
    // print(json_encode($result));
    // print_r(json_decode($result, true));
} catch (S3Exception $e) {
    echo $e->getMessage() . PHP_EOL;
}