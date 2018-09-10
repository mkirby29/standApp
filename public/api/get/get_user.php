<?php

$token=$_POST['token'];

$query = "SELECT * FROM `users` WHERE `token` LIKE '$token";

?>