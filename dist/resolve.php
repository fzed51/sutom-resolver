<?php
declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";
require  __DIR__ . "/../src/data.php";
$request = new \Lib\Request();

if ($request->getMethod() !== 'POST'){
    (new \Lib\Response(405))->render();
    die();
}

$data = $request->getJson();
$validator = new \Lib\Validator($data);

if (!$validator->test())
{
    (new \Lib\Response(400, implode(', ', $validator->getErrors())))->render();
    die();
}

$config = $data['config'];
$length = $config['length'];
$letter = $config['letter'];

$words = readDataWithStartAndLength($length, $letter);

$rep = new \Lib\Response(200, $words);
$rep->render();