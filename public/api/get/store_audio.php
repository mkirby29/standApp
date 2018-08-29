<?php

require('../../aws/vendor/autoload.php');
require('secret_key.php');
require('post/fileconversion.php');

use Aws\S3\S3Client;
use Aws\Exception\AwsException;



try{
    //Create a S3Client
    $credentials = new Aws\Credentials\Credentials($key, $secret);
    $s3Client = new S3Client([
        'region' => 'us-west-1',
        'version' => 'latest',
        'credentials' => $credentials,
        'scheme' => 'http'
    ]);
    $result = $s3Client->putObject([
        'Bucket'     => "standapp618",
        'Key'        => "{$name}",
        'SourceFile' => "{$target_file}",
    ]);

    // unlink($target_file);
} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}
?>