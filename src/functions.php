<?php
use function Cli\writeln;

include_once __DIR__ . "/cli.php";

function showKnows(string $word, string $knows): string
{
    $len = strlen($word);
    if ($len !== strlen($knows)) {
        throw new RuntimeException(
            "Il existe une difference de longueur entre le mots et les lettres connues."
        );
    }
    $show = "";
    for ($n = 0; $n < $len; $n++) {
        $show .= $knows[$n] === '1' ? $word[$n] : '_';
    }
    $show = implode(' ', str_split($show));
    return strtoupper($show);
}

function getResultat(string $word, string $actual): string
{
    $len = strlen($word);
    if ($len !== strlen($actual)) {
        throw new RuntimeException(
            "Il existe une difference de longueur entre le mots et la proposition."
        );
    }
    $result = "";
    for ($n = 0; $n < $len; $n++) {
        if ($word[$n] === $actual[$n]) {
            $word[$n] = "_";
            $result .= '1';
        } else {
            $result .= '.';
        }
    }
    for ($n = 0; $n < $len; $n++) {
        $pos = strpos($word, $actual[$n]);
        if ($result[$n] !== '1' && $pos !== false) {
            $word[$pos] = "_";
            $result[$n] = '0';
        }
    }
    return $result;
}

function updateKnows(string $knows, string $resultat): string
{
    $len = strlen($knows);
    if ($len !== strlen($resultat)) {
        throw new RuntimeException(
            "Il existe une difference de longueur entre les lettres connues et le resultat."
        );
    }
    for ($n = 0; $n < $len; $n++) {
        if ($resultat[$n] === '1') {
            $knows[$n] = "1";
        }
    }
    return $knows;
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
        $len = strlen($word);
        $wordUnknow = '';
        for ($i = 0; $i < $len; $i++) {
            $wordUnknow .= ($result[$i] === '1') ? '_' : $word[$i];
        }
        for ($ok = true, $i = 0; $ok && $i < $len; $i++) {
            $currentResult = $result[$i];
            $currentActual = $actual[$i];
            $currentWord = $word[$i];
            if ($result[$i] === '1') {
                $ok = $ok && $actual[$i] === $word[$i];
            } elseif ($result[$i] === '0') {
                $pos = strpos($wordUnknow, $actual[$i]);
                $ok = $ok && $actual[$i] !== $word[$i] && $pos !== false;
                if ($pos !== false) {
                    $wordUnknow[$pos] = '_';
                }
            } else {
                $ok = $ok && strpos($wordUnknow, $actual[$i]) === false;
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