<?php
    class StrFrequency {
        public $str;

        function __construct($string){
            $this->str = $string;
        }
        function letterFrequencies() {
            $str = $this->str;
            $str = strtoupper($str);
    
            $abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            $freq = array();
            for ($i = 0; $i < strlen($abc); $i++) {
                $count = 0;
                for ($j = 0; $j < strlen($str); $j++) {
                    if ($abc[$i] == $str[$j]) {
                        $count++;
                    }
                }
                if($count != 0) {
                    $freq[$abc[$i]] = $count;
                }
            }
            return $freq;
        }
        function wordFrequencies() {
            $str = $this->str;
            $str = preg_replace("/[^a-z]/i", ' ', $str);
            $str = strtoupper($str);
            $arr = str_word_count($str, 1);
            return array_count_values($arr);
        }
        function reverseString() {
            $this->str = preg_replace('/[^ a-z]/i',' ',$this->str );
            return strrev($this->str);
        }
    }
    // function test($string){
    //     $obj = new StrFrequency($string);
        
    //     $symbol = $obj->letterFrequencies();
    //     echo "Letters in ". $string. "\n";
    //     foreach($symbol as $k => $v) {
    //         echo "Letter ". $k . " is repeated ". $v . " times\n";
    //     }

    //     $symbol = $obj->wordFrequencies();
    //     echo "Words in ". $string. "\n";
    //     foreach($symbol as $k => $v) {
    //         echo "Word ". $k . " is repeated ". $v . " times\n";
    //     }
    //     echo "Reverse the string: ". $string. "\n";
    //     echo $obj->reverseString() . "\n";
    // }
    // test("Face it, Harley-- you and your Puddin' are kaput!");
    // echo "*************\n";
    // test("  Test test 123 45 !0 f   HeLlO wOrLd  ");
    // echo "*************\n";
    // test("");
?>