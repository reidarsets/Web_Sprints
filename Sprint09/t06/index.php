<?php
    include 'connection/DatabaseConnection.php';
    include 'models/Registration.php';
    error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST" class="box_form">
        <div class="body_signUP" style="
        <?php
            if($_POST['log_in']) {
                echo "display: none";
            }
            else {
                echo "display: block";
            }
        ?>">
            <input placeholder="Login" name="login">
            <br>
            <input type="password" placeholder="Password" name="password">
            <br>
            <input type="password" placeholder="Confirm password" name="password2">
            <br>
            <input placeholder="Full name" name="full_name">
            <br>
            <input placeholder="Email" name="email">
            <br>
            <input type="submit" value="Sign up" name="sign_up" id="sign_up_button">
            <input type="submit" value="Log in" name="log_in" id="log_in_button">
            <br>
            <input type="submit" value="Remind password?" name="remember" id="remember">
            <br>
        </div>
        <div class="body_signUP" style="
        <?php
            if(!$_POST['log_in']) {
                echo "display: none";
            }
            else {
                echo "display: block";
            }
        ?>">
            <input placeholder="Login" name="login">
            <br>
            <input type="password" placeholder="Password" name="password">
            <br>
            <input type="submit" value="Log in" name="log_in" id="log_in_button">
        </div>
    </from>
    <?php
        if(isset($_POST['sign_up'])) {      
            $i = 0;
            if($_POST['password'] == $_POST['password2']) {
                echo '<span>Sign up success</span>';
            }
            else {
                echo '<span>Sign up fail</span>';
                $i = 1;
            }
            if($i == 0) {
                $connection = new Registration("users", $_POST['login'], $_POST['password'], $_POST['password2'], $_POST['full_name'], $_POST['email']);
                $connection->save();
            }
        }
    ?>
</body>
</html>