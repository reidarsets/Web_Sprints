<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>New Avenger application</h1>
    <div style="background-color: darkgray; border: 2px solid black; padding-left: 25px">
    <p>POST</p>
    <?php
        $arr = [
            "name" => $_POST["name"],
            "email" => $_POST["e-mail"],
            "age" => $_POST["age"],
            "description" => $_POST["about"],
            "photo" => $_POST["photo"]
        ];
        if($arr["name"] != null) {
            echo "<pre>";
            echo "Array <br>(";
            foreach($arr as $element => $key) {
                echo "<br>    [" . $element . "] => " . $key;
            }
            echo "<br>)<br>";
            echo "</pre>";
            echo "<br>";
        }
    ?>
    </div>
    <br>
    <form action="index.php" method="post">
        <fieldset style="padding: 25px">
            <fieldset style="padding: 25px 10px">
                <legend>About candifate</legend>
                <label for="Name">Name</label>
                <input type="text" required id="Name" name="name" placeholder="Tell your name">
                <label for="E-mail">E-mail</label>
                <input type="text" required id="E-mail" name="e-mail" placeholder="Tell your e-mail">
                <label for="Age">Age</label>
                <input type="number" required id="Age" name="age" min="0" max="9999" step="1">
                <br>
                <br>
                <label for="About">About</label>
                <textarea required id="About" name="about" placeholder="Tell about yourself, max 500 symbols" rows="5" cols="69" maxlength="500"></textarea>
                <br>
                <br>
                <label for="Photo">Your Photo:</label>
                <input type="file" required id="Photo" name="photo"></input>
            </fieldset>
            <br>
            <input type="reset">
            <input type="submit">
            <br>
            <br>
        </fieldset>
    </form>
</body>
</html>