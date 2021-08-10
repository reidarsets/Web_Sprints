<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SERVER</title>
</head>
<body>
    <p><?php echo "Name: " . $_SERVER['SCRIPT_FILENAME'] . "<br/>" .
                  "Arguments: ";
                  foreach($_SERVER['argv'] as $element) {
                    echo $element . " ";
                  }
                  echo "<br/>" . "Server IP: " . $_SERVER['SERVER_ADDR'] . "<br/>" .
                  "Name of host: " . $_SERVER['SERVER_NAME'] . "<br/>" .
                  "Name of protocol: " . $_SERVER['SERVER_PROTOCOL'] . "<br/>" .
                  "A query method: " . $_SERVER['REQUEST_METHOD'] . "<br/>" .
                  "User-Agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br/>" .
                  "Client IP: " . $_SERVER['REMOTE_ADDR'] . "<br/>" .
                  "A list of passed parameters: " . $_SERVER['PATH_INFO'] . "<br/>"
    ?></p>
</body>
</html>