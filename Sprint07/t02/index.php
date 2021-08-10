<?php
    session_start();
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
    <h1>Password</h1>
    <?php
        if($_POST['check_b']) {
            if($_SESSION['password'] != crypt($_POST['pass_check'], $_SESSION['salt'])) {
                echo '<span style="color: red">Access denied!</span><br><br>';
            }
            else {
                echo '<span style="color: green">Hacked!</span><br><br>';
                unset($_SESSION['password']);
                unset($_SESSION['salt']);
                session_destroy(); 
            }
        }
    ?>
    <form action="index.php" method="post" style="
            <?php
                if(isset($_POST['save'])) {
                    echo ' display: none;';
                }
                else {
                    echo ' display: block;';
                }
            ?>  
        ">
        <span>Password not saved at session</span>
        <br>
        <span>Password for saving to session</span>
        <input type="text" id="Pass_save" name="pass_save" placeholder="Password to session">
        <br>
        <span>Salt for saving to session</span>
        <input type="text" id="Salt_save" name="salt_save" placeholder="Salt to session">
        <br>
        <input type="submit" value="Save" name="save">
    </form>
    <form action="index.php" method="post" style="
            <?php
                $_SESSION['password'] = crypt($_POST['pass_save'], $_POST['salt_save']);
                $_SESSION['salt'] = $_POST['salt_save'];
                if(!isset($_POST['save'])) {
                    echo ' display: none;';
                }
                else {
                    echo ' display: block;';
                }
            ?>  
        ">
        <span>Password saved at session.</span>
        <br>
        <span>Hash is 
            <?php 
                echo $_SESSION['password'];
            ?></span><br> 
        <span>Try to guess:</span>
        <input name="pass_check" placeholder="Password to session">
        <input type="submit" name="check_b" value="Check password">
        <br>
        <input type="submit" value="Clear" name="clear">
    </form>
</body>
</html>