<?php

require '../vendor/autoload.php';
require '../src/Application/Actions/User/ListUsersAction.php';

use App\Application\Actions\User;


$num_of_lines = (int) $argv[1];
$lines = User\FakeDataGenerator::generate($num_of_lines);
foreach($lines as $line){
    echo "INSERT INTO mail_check_requests VALUES ('" . implode("','", array_values($line))  . "');";
    echo PHP_EOL;
}


