<?php

use function Cli\request;
use function Cli\writeln;
use function Cli\requestFixLength;
use function Cli\showResultat;

include __DIR__ . "/cli.php";
include __DIR__ . "/data.php";

function filtreNoLetter(array $words, string $letters): array
{
    return array_values(array_filter($words, static function ($word) use ($letters) {
        $l = strlen($letters);
        for ($i = 0; $i < $l; $i++) {
            $r = strpos($word, $letters[$i]);
            if ($r !== false) {
                return false;
            }
        }
        return true;
    }));
}

function filtre(array $words, $actual, $result): array
{
    $words = array_filter($words, static function ($word) use ($actual, $result) {
        $l = strlen($word);
        $wordUnknow = '';
        for ($i = 0; $i < $l; $i++) {
            $wordUnknow .= ($result[$i] === '1') ? '_' : $word[$i];
        }
        for ($ok = true, $i = 0; $ok && $i < $l; $i++) {
            if ($result[$i] === '1') {
                $ok = $actual[$i] === $word[$i];
            } elseif ($result[$i] === '0') {
                $ok = $actual[$i] !== $word[$i] && strpos($wordUnknow, $actual[$i]) !== false;
            } else {
                $ok = strpos($wordUnknow, $actual[$i]) === false;
            }
        }

        return $ok;
    });
    return array_values($words);
}

function showList($words, $len = 10): void
{
    if ($len > count($words)) {
        $len = count($words);
    }
    writeln(count($words) . ' mots trouve');
    writeln("Voici les $len mot les plus judicieux");
    for ($i = 0; $i < $len; $i++) {
        writeln($words[$i]);
    }
}

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


