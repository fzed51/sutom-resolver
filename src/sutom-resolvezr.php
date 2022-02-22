<?php

use function Cli\request;
use function Cli\writeln;

include __DIR__ . "/cli.php";

function readData(int $len, string $firstLetter): array
{
    $lexiqueFile = __DIR__ . "/../data/Lexique.csv";
    $handle = fopen($lexiqueFile, 'r');
    $words = [];
    while (($data = fgetcsv($handle, 0, "\t")) !== false) {
        if (((int)$data[2]) === $len) {
            $word = $data[0];
            if (strpos($word, ' ') >= 0
                && strpos($word, '-') === false
                && strpos($word, $firstLetter) === 0) {
                $clean = sansAccent($word);
                $words[] = [$clean, wordWeight($clean), (double)$data[1]];
            }
        }
    }
    usort($words, static function ($w1, $w2) {
        return ($w2[1] + $w2[1]) - ($w1[1] + $w1[2]);
    });
    $words = array_unique(
        array_column($words, 0)
    );
    return array_values($words);
}

function sansAccent(string $word): string
{
    $search = ['à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ'];
    $replace = ['a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y'];
    return (string)str_replace($search, $replace, $word);
}

function wordWeight($word): float
{

    $fregCar = [
        "A" => 8.15,
        "B" => 0.97,
        "C" => 3.15,
        "D" => 3.73,
        "E" => 17.39,
        "F" => 1.12,
        "G" => 0.97,
        "H" => 0.85,
        "I" => 7.31,
        "J" => 0.45,
        "K" => 0.02,
        "L" => 5.69,
        "M" => 2.87,
        "N" => 7.12,
        "O" => 5.28,
        "P" => 2.80,
        "Q" => 1.21,
        "R" => 6.64,
        "S" => 8.14,
        "T" => 7.22,
        "U" => 6.38,
        "V" => 1.64,
        "W" => 0.03,
        "X" => 0.41,
        "Y" => 0.28,
        "Z" => 0.15,
    ];
    $cars = array_unique(str_split($word));
    $w = 0;
    foreach ($cars as $car) {
        $w += $fregCar[strtoupper($car)];
    }

    return $w / (1 + (strlen($word) - count($cars)));
}

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
                $ok = $actual[$i] !== $word[$i];
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

function requestFixLength(string $question, int $len): string
{
    $rep = null;
    do {
        if ($rep !== null) {
            writeln("Il n'y a pas le bon nopmbre d elettre");
        }
        $rep = trim(request($question));
    } while (strlen($rep) !== $len);
    return $rep;
}

$nbCar = (int)Cli\request("nombre de lettre du mot ?");
$fl = strtolower(trim(request("Quel est la 1ere lettre ?")));

$words = readData($nbCar, $fl);

do {
    showList($words);
    $actual = strtolower(requestFixLength("Donnez une proposition ?", $nbCar));
    $result = strtolower(requestFixLength("Donnez le resultat ?", $nbCar));
    $words = filtre($words, $actual, $result);
} while (count($words) > 1);

if (count($words) === 0) {
    writeln("Désolé je ne vois pas quel mot est à trouver");
}
$word = array_pop($words);
writeln("Barvo le mot à trouver est '$word'");


