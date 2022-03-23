<?php
namespace Cli;

function request(string $message): string {
    write($message. ' ');
    return fgets(STDIN);
}

function write (string $message): void {
    echo $message;
}

function writeln (string $message): void {
    write($message);
    echo PHP_EOL;
}

function requestFixLength(string $question, int $len): string
{
    $rep = null;
    do {
        if ($rep !== null) {
            writeln("Il n'y a pas le bon nopmbre de lettre");
        }
        $rep = trim(request($question));
    } while (strlen($rep) !== $len);
    return $rep;
}

function pause(): void {
    request('Appuyer sur [entrée] pour continuer.');
}

function showResultat (string $result): void {
    writeln(str_replace(['1','0','.'],['🟥','🟡','🟦' ], $result));
}