<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Charset</h1>
    <form action="index.php" method="post">
        <span>Change charset:</span>
        <input type="text" name="change" placeholder="Input string">
        <br><br>
        <span>Select charset or several charsets:</span>
        <select multiple size="3" name="select[]">            
            <option>UTF-8</option>
            <option>ISO-8859-1</option>
            <option>Windows-1252</option> 
        </select>
        <input type="submit" name="but_change" value="Change charset" style="position: relative; bottom:4px;">
        <input type="submit" value="Clear" style="position: relative; bottom:4px;">
    </form>
    <br>
    <?php
    if ($_POST) {
        echo 'Input string: <textarea>' . $_POST["change"] . '</textarea><br>';
        for($i=0;$_POST['select'][$i];$i++) {
            utf8_encode($_SESSION['change']);
            if($i == 0) {
                echo 'UTF-8 <textarea>' . mb_convert_encoding($_POST["change"], "UTF-8") . '</textarea><br>';
            }
            if($i == 1) {
                echo 'ISO-8859-1 <textarea>' . mb_convert_encoding($_POST["change"], "ISO-8859-1") . '</textarea><br>';
            }
            if($i == 2) {
                echo 'Windows-1252 <textarea>' . mb_convert_encoding($_POST["change"], "Windows-1252") . '</textarea><br>';
            }
        }
    }
    ?>
</body>
</html>