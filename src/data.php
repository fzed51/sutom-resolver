<?php


function readData(): array
{
    $lexiqueFile = __DIR__ . "/../data/Lexique.csv";
    $handle = fopen($lexiqueFile, 'r');
    $words = [];
    while (($data = fgetcsv($handle, 0, "\t")) !== false) {
            $word = $data[0];
            if (strpos($word, ' ') === false
                && strpos($word, '-') === false
                && strpos($word, '.') === false
                && strpos($word, "'") === false) {
                $clean = sansAccent($word);
                $words[] = [$clean, wordWeight($clean), (double)$data[1]];
            }
    }
    return $words;
}

function readDataWithStartAndLength (int $len, string $firstLetter): array
{

    $words = array_filter(readData(), function($word) use ($len,$firstLetter ){
        return strlen($word[0]) === $len && $word[0][0] === $firstLetter;
    });

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
    $s = htmlentities($word);
    if($s === $word){
        return $word;
    }
    $s = preg_replace("/&(.)(acute|cedil|circ|ring|tilde|uml|grave);/", "$1", $s);
    $s = preg_replace('#&([A-za-z]{2})(?:lig);#', '1', $s); // pour les ligatures e.g. 'Å“'
    return (string)$s;
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
        if(strpos('ABCDEFGHIJKLMNOPQRSTUVWXYZ', strtoupper($car)) !== false) {
            $w += $fregCar[strtoupper($car)];
        } else {
            $numCar = ord($car);
            echo "/!\\ Attention '$car'($numCar) n'est pas un caractère autorisé" . PHP_EOL;
        }
    }

    return $w / (1 + (strlen($word) - count($cars)));
}
