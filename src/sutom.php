<?php

use function Cli\write;
use function Cli\writeln;
use function Cli\requestFixLength;
use function Cli\showResultat;

include __DIR__ . "/cli.php";
include __DIR__ . "/data.php";


function showKnows(string $word, string $knows): string {
    $len = strlen($word);
    if($len !== strlen($knows)){
        throw new RuntimeException(
            "Il existe une difference de longueur entre le mots et les lettres connues."
        );
    }
    $show = "";
    for($n=0; $n<$len; $n++){
        $show .= $knows[$n] === '1' ? $word[$n] : '_';
    }
    return strtoupper($show);
}

function getResultat(string $word, string $actual): string {
    $len = strlen($word);
    if($len !== strlen($actual)){
        throw new RuntimeException(
            "Il existe une difference de longueur entre le mots et la proposition."
        );
    }
    $result = "";
    for($n=0; $n<$len; $n++){
        if($word[$n] === $actual[$n]){
            $word[$n] = "_";
            $result .= '1';
        } else {
            $result .= '.';
        }
    }
    for($n=0; $n<$len; $n++){
        $pos = strpos($word, $actual[$n]);
        if($result[$n] !== '1' && $pos !== false){
            $word[$pos] = "_";
            $result[$n] = '0';
        }
    }
    return $result;
}

function updateKnows(string $knows, string $resultat): string {
    $len = strlen($knows);
    if($len !== strlen($resultat)){
        throw new RuntimeException(
            "Il existe une difference de longueur entre les lettres connues et le resultat."
        );
    }
    for($n=0; $n<$len; $n++) {
        if ($resultat[$n] === '1') {
            $knows[$n] = "1";
        }
    }
    return $knows;
}

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
Writeln($word);
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
