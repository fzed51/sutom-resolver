<?php

require_once __DIR__ . "/../src/data.php";

use PHPUnit\Framework\TestCase;

class DataTest extends TestCase
{
    private array $words = [];

    /**
     * @param bool $force
     * @return array<mixed>
     */
    protected function getWords(bool $force = false): array
    {
        if ($force || empty($this->words)){
            $this->words = readData();
        }
        return $this->words;
    }


    public function testReadData(): void
    {
        $nbWords = 137623;
        $words = $this->getWords(true);
        self::assertGreaterThanOrEqual($nbWords, count($words));
        if (count($words) > $nbWords) {
            echo "Nombre de mot superieur à $nbWords dans le lexique. Veuillez mettre à jour le TU "
                . __FILE__ . PHP_EOL;
        }
    }

    public function testReadDataWithStartAndLength(): void
    {
        $filtred = readDataWithStartAndLength(5, 'a');
        self::assertNotCount(0, $filtred);
    }

    public function testSansAccent():void
    {
        self::assertEquals('chalons', sansAccent('châlons'));
        self::assertEquals('garcon', sansAccent('garçon'));
    }

    public function testWordWeight():void
    {
        self::assertLessThan(wordWeight('t') , wordWeight('tt'));
        self::assertGreaterThan(wordWeight('abcz'), wordWeight('abce'));
    }

}
