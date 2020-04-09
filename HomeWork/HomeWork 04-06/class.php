<?php


class cCalc {
    public $cVal1, $cVal2;
    public function __construct( $cVal1, $cVal2 ) {
        $this->cVal1 = $cVal1;
        $this->cVal2 = $cVal2;
    }
    public function add() {
        return $this->cVal1 + $this->cVal2;
    }
    public function subtract() {
        return $this->cVal1 - $this->cVal2;
    }
    public function multiply() {
        return $this->cVal1 * $this->cVal2;
    }
    public function divide() {
        return $this->cVal1 / $this->cVal2;
    }
}