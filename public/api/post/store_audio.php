<?php

require('../../aws/vendor/autoload.php');

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

$key = "AKIAJ2WSYCSTVTASC7TQ";
$secret = "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";


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
        'Bucket'     => "my337338",
        'Key'        => "hello",
        'SourceFile' => "../bucket/ukulele.mp3",
    ]);
} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}
?>