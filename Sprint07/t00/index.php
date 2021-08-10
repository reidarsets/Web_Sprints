<?php
    if($_COOKIE["counter"]) {
        setcookie("counter", $_COOKIE["counter"] + 1, time() + 60);
    }
    else {
        setcookie("counter", 2, time() + 60);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Cookie counter</h1>
        <?php
            if($_COOKIE["counter"]) {
                echo "This page was loaded " . $_COOKIE["counter"] . " time(s) in last minute";
            }
            else {
                echo "This page was loaded 1 time(s) in last minute";
            }
            
        ?>
</body>
</html>
