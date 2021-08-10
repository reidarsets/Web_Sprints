  
<?php
    session_start();
    error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport\" content="width=device-width, initial-scale=1.0">
    <title>Files</title>
</head>
<body>
<h1>Files</h1>
<form action="index.php" method="post">
    <span>File name: <input type="text" name="file" required></span>
    <span>Content: <textarea name="content" required></textarea></span>
    <input type="submit" value="create file">
</form>
    <?php
        function autoload($pClassName) { include(__DIR__ . '/' . $pClassName . '.php'); }
        spl_autoload_register("autoload");

        if ($_POST["delete"]) {
            unlink("tmp/" . $_GET["file"]);
            unset($_GET["file"]);
        }
        $list= new FilesList("tmp");
        echo $list->createList() . "\n";
        $file->write($_POST["content"]);
        if($_GET){
            $_SESSION['file'] = $_GET['file'];
            $file = $_SESSION['file'];
            echo("<h1>Selected file: \"<i>$file</i>\"</h1>");
            echo(file_get_contents('tmp/'.$file).'</p>');
        }
        if($_POST['delete'] == 'true') {
            unlink("tmp/".$_SESSION['file']);            
            unset($_POST["submit"]);
            unset($_GET['file']);
        }
    ?>

</body>
</html>