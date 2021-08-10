<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Session for new</h1>
    
    <form action="index.php" method="post" style="
        <?php
            if (isset($_POST['submit_b'])) {
                echo ' display: none;';
             }
            else {
                echo ' display: block;';
            }
        ?>
    ">
        <fieldset style="padding: 25px">
            <fieldset style="padding: 25px 10px">
                <legend>About HERO</legend>
                <label for="Name">Real Name</label>
                <input type="text" required id="Name" name="name" placeholder="Tell your name">
                <label for="E-mail">Current Alias</label>
                <input type="text" required id="E-mail" name="e-mail" placeholder="Tell your current alias">
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
            <fieldset style="padding: 25px 10px">
                <legend>Powers</legend>
                <input type="checkbox" name="Strength" id="Strength"></input>
                <label for="Strength">Strength</label>
                <input type="checkbox" name="Speed" id="Speed"></input>
                <label for="Strength">Speed</label>
                <input type="checkbox" name="Intelligence" id="Intelligence"></input>
                <label for="Strength">Intelligence</label>
                <input type="checkbox" name="Teleportation" id="Teleportation"></input>
                <label for="Strength">Teleportation</label>
                <input type="checkbox" name="Immortal" id="Immortal"></input>
                <label for="Strength">Immortal</label>
                <input type="checkbox" name="Another" id="Another"></input>
                <label for="Strength">Another</label>
                <br>
                <br>
                <label for="Level_control">Level of control:</label>
                <input type="range" id="Level_control" name="Level_control" min="0" max="10" value="0">
            </fieldset>
            <fieldset style="padding: 25px 10px">
                <legend>Publicity</legend>
                <input type="radio" name="choose" value="0">
                <label for="choose">UNKNOWN</label>
                <input type="radio" name="choose" value="1">
                <label for="choose">LIKE A GHOST</label>
                <input type="radio" name="choose" value="2">
                <label for="choose">I AM IN COMICS</label>
                <input type="radio" name="choose" value="3">
                <label for="choose">I HAVE FUN CLUB</label>
                <input type="radio" name="choose" value="4">
                <label for="choose">SUPERSTAR</label>
            </fieldset>
            <br>
            <input type="reset">
            <input type="submit" name="submit_b">
            <br>
            <br>
        </fieldset>
    </form>
    <form action="index.php" method="post">
        <div style="
            <?php
                if(!isset($_POST['submit_b'])) {
                    echo ' display: none;';
                }
                else {
                    echo ' display: block;';
                }
            ?>  
        ">
            <fieldset style="padding-left: 40px;border: none;">
                <?php
                    if(isset($_POST['submit_b'])) {
                        $temp = 0;
                        if($_POST["Strength"] == "on") {
                            $temp++;
                        }
                        if($_POST["Speed"] == "on") {
                            $temp++;
                        }
                        if($_POST["Intelligence"] == "on") {
                            $temp++;
                        }
                        if($_POST["Teleportation"] == "on") {
                            $temp++;
                        }
                        if($_POST["Immortal"] == "on") {
                            $temp++;
                        }
                        if($_POST["Another"] == "on") {
                            $temp++;
                        }
                        $array = [
                            "name" => $_POST["name"],
                            "alias" => $_POST["e-mail"],
                            "age" => $_POST["age"],
                            "description" => $_POST["about"],
                            "photo" => $_POST["photo"],
                            "experience" => $temp,
                            "level" => $_POST["Level_control"],
                            "purpose" => $_POST["choose"]
                        ];
                        foreach($array as $element => $num) {
                            echo $element . ': ' . $num . "<br>";
                        }
                    }
                ?>
            </fieldset>
            <fieldset style = "padding:20px;margin-top:10px;">
                <input type="submit" value="Forget">
            </fieldset>
        </div>

    </form>
</body>
</html>