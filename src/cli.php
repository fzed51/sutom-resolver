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