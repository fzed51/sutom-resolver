<?php

use function Cli\pause;
use function Cli\request;
use function Cli\requestFixLengthOrSpec;
use function Cli\writeln;
use function Cli\requestFixLength;
use function Cli\showResultat;

include_once __DIR__ . "/cli.php";
include_once __DIR__ . "/data.php";
include_once __DIR__ . "/functions.php";


$nbCar = (int)Cli\request("nombre de lettre du mot ?");
$fl = strtolower(trim(request("Quel est la 1ere lettre ?")));

$words = readDataWithStartAndLength($nbCar, $fl);

$lengthLst = 10;
$pos = 0;

do {
    showList($words, $pos, $lengthLst);
    $actual = strtolower(requestFixLengthOrSpec("Donnez une proposition ? ('+' pour voir plus de mots)", $nbCar, "+"));
    if($actual === "+"){
        $pos+=$lengthLst;
    } else {
        $pos = 0;
        $result = strtolower(requestFixLength("Donnez le resultat ?", $nbCar));
        showResultat($result);
        $words = filtre($words, $actual, $result);
    }
} while (count($words) > 1);

if (count($words) === 0) {
    writeln("Désolé je ne vois pas quel mot est à trouver");
}
$word = array_pop($words);
writeln("Barvo le mot à trouver est '$word'");

pause();
