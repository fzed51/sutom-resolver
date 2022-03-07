<?php

use function Cli\write;
use function Cli\writeln;
use function Cli\requestFixLength;
use function Cli\showResultat;

include __DIR__ . "/cli.php";
include __DIR__ . "/data.php";
include __DIR__ . "/functions.php";




$words = readData();
try {
    $word = $words[random_int(0, count($words) - 1)][0];
} catch (Exception $e) {
    throw new RuntimeException("Impossible de générer un nombre aléatoire");
}
$len = strlen($word);
$firstLetter = $word[0];
Writeln("Trouvez un mots de $len lettres commençant par $firstLetter");

$knows = '1' . str_repeat('.', $len - 1);
$step = [];
do {
    if (!empty($step)){
        Writeln(showKnows($word, $knows));
    }
    $actual = strtolower(requestFixLength("Donnez une proposition ?", $len));
    $resultat = getResultat($word, $actual);
    $step[] = $resultat;
    showResultat($resultat);
    $knows = updateKnows($knows, $resultat);
} while ($resultat !== str_repeat('1', $len ));
$nbStep = count($step);
writeln(sprintf("BRAVO ! Vous avez trouver en %d coups!",$nbStep ));
for ($n=0; $n < $nbStep; $n++){
    write(sprintf("#%d ", $n + 1));
    showResultat($step[$n]);
}
