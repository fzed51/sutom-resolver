<?php

use function Cli\requestFixLength;
use function Cli\showResultat;
use function Cli\write;
use function Cli\writeln;

include_once __DIR__ . "/cli.php";
include_once __DIR__ . "/data.php";
include_once __DIR__ . "/functions.php";

Writeln("Veuillez patienter, je determine le mot a trouver");

$words = readData();
if ($argc > 1) {
    $q = $argv[1];
    $regex = '/^([a-z])([1-9][0-9]*)$/m';
    $regex2 = '/^([a-z]+)$/m';
    if (preg_match($regex, $q, $matches) === 1) {
        $len = (int)$matches[2];
        $firstLetter = $matches[1];
        Writeln("Recherche d'un mot de $len lettres commencant par $firstLetter");
        $word = getRandomWord(array_filter($words, static function ($word) use ($len, $firstLetter) {
            return strlen($word[0]) === $len && $word[0][0] === $firstLetter;
        }));
    } elseif (preg_match($regex2, $q, $matches) === 1) {
        $word = $matches[1];
        Writeln("Recherche du mot $word");
        if (!in_array($word, array_map(static function ($stat) {
            return $stat[0];
        }, $words), false)) {
            throw new RuntimeException("$word n'est pas un mot possible");
        }
    }
} else {
    $word = getRandomWord($words);
}
$len = strlen($word);
$firstLetter = $word[0];

Writeln("Trouvez un mots de $len lettres commençant par $firstLetter");

$knows = '1' . str_repeat('.', $len - 1);
$step = [];
do {
    if (!empty($step)) {
        Writeln(showKnows($word, $knows));
    }
    $actual = strtolower(requestFixLength("Donnez une proposition ?", $len));
    $resultat = getResultat($word, $actual);
    $step[] = $resultat;
    showResultat($resultat);
    $knows = updateKnows($knows, $resultat);
} while ($resultat !== str_repeat('1', $len));
$nbStep = count($step);
writeln(sprintf("BRAVO ! Vous avez trouver en %d coups!", $nbStep));
for ($n = 0; $n < $nbStep; $n++) {
    write(sprintf("#%d ", $n + 1));
    showResultat($step[$n]);
}
