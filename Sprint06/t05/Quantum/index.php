<?php 
    namespace Space\Quantum;
    use \DateTime;

    function calculate_time() {
        $date1 = new DateTime();
        $date2 = new DateTime('1939-01-01');

        $diff = $date2->diff($date1);
        $total_days = $diff->format("%Y") * 365.25 + $diff->format("%m") * 30.4167 + $diff->format("%d") / 7;
        $result = array();
        $total_days /= 7;

        $result[0] = floor($total_days / 365.25);
        $total_days %= 365.25;

        $result[1] = floor($total_days / 30.4167);
        $total_days %= 30.4167;

        $result[2] = $total_days;

        return $result;
    }
?>