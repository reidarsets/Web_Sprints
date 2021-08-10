<?php 
    namespace Space\Normal;
    use \DateTime;

    function calculate_time() {
        $date1 = new DateTime();
        $date2 = new DateTime('1939-01-01');
        
        return $date2->diff($date1);
    }
?>