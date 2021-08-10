<?php 
    namespace Space\Normal;
    use \DateTime;

    function calculate_time() {
        $date1 = new DateTime();
        $date2 = new DateTime('1939-01-01');
        
        return $date2->diff($date1);
    }
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Normal space</title>
</head>

<body>
    <p><?php $time = calculate_time();
        echo "In normal space you were absent for " .  $time->format("%Y") . " years, " . 
            $time->format("%m") . " months, " . $time->format("%d") . " days!"?></p></body>

</html>
