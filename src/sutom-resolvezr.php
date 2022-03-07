<?php

use function Cli\request;
use function Cli\writeln;
use function Cli\requestFixLength;
use function Cli\showResultat;

include __DIR__ . "/cli.php";
include __DIR__ . "/data.php";
include __DIR__ . "/functions.php";


$nbCar = (int)Cli\request("nombre de lettre du mot ?");
$fl = strtolower(trim(request("Quel est la 1ere lettre ?")));

$words = readDataWithStartAndLength($nbCar, $fl);

do {
    showList($words);
    $actual = strtolower(requestFixLength("Donnez une proposition ?", $nbCar));
    $result = strtolower(requestFixLength("Donnez le resultat ?", $nbCar));
    showResultat($result);
    $words = filtre($words, $actual, $result);
} while (count($words) > 1);

if (count($words) === 0) {
    writeln("Désolé je ne vois pas quel mot est à trouver");
}
$word = array_pop($words);
writeln("Barvo le mot à trouver est '$word'");


