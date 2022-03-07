<?php
include __DIR__.'/../src/functions.php';

use PHPUnit\Framework\TestCase;

/**
 * test de SutomResolverTest
 */
class SutomResolverTest extends TestCase
{
    public function testFiltre()
    {
        $start = [
            "banalite",
            "bataille",
            "balaient",
        ];
        self::assertEquals(['banalite'],filtre($start, 'bataille', '110100.1'));
 }
}
