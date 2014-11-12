<?php

class Test extends PHPUnit_Framework_TestCase
{
    public function test1()
    {
        $stack = array();
        $this->assertEquals(0, count($stack));
    }
}