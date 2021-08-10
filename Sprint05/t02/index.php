<?php
    function checkDivision($a = 1, $b = 60) {
        for($i = $a; $i <= $b; $i++) {
            echo 'The number is ' . $i;
            $description = '';
            $counter = 0;
            if($i % 2 == 0) {
                $description .= ' is divisible by 2';
                $counter = 1;
            }
            if($i % 3 == 0) {
                if($counter == 0) {
                    $description .= ' is divisible by 3';
                }
                else {
                    $description .= ', is divisible by 3';
                }
                $counter = 1;
            }
            if($i % 10 == 0) {                
                if($counter == 0) {
                    $description .= ' is divisible by 10';
                }
                else {
                    $description .= ', is divisible by 10';
                }
                $counter = 1;
            }
            if($counter == 0) {
                $description .= ' -';
            }
            echo $description . "\n";
        }
    }
    // echo"*** Range is 3 - 7 checkDivision(3,7) ***\n";
    // checkDivision(3,7);
    // echo"\n*** Range is 58 - ... checkDivision(58) ***\n";
    // checkDivision(58);
    // echo"\n*** Range is ... - ... checkDivision() ***\n";
    // checkDivision();

?>