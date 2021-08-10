<?php
include 'models/Model.php';
class Registration extends Model {
    public $id;
    public $username;
    public $password;
    public $name;
    public $email;
    function __construct() {
        parent::__construct("users");
    }
    function __toString() {
        return "id: $this->id\n
                username: $this->username\n
                password: $this->password\n
                name: $this->name\n
                email: $this->email";
    }
    function find($id) {
       if($this->connection->getConnectionStatus()) {
           $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM users WHERE id=$id;"));
           if (isset($elements)) {
               $this->id = $elements['id'];
               $this->username = $elements['username'];
               $this->password = $elements['password'];
               $this->name = $elements['name'];
               $this->email = $elements['email'];
           }
       }
    }
    function delete() {   
        if($this->connection->getConnectionStatus()) {
            $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM users WHERE id=$this->id;"));
            if ($elements) {
                $this->connection->connection->query("DELETE FROM users WHERE id=$this->id;");
            }
        }
    }
    function save() {
        $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM users WHERE id=$this->id;"));
        if($elements) {
            $this->connection->connection->query("INSERT users SET username=$this->username, password=$this->password,
             name=$this->name, email=$this->email WHERE id=$this->id;");
        }
        else {
            $this->connection->connection->query("INSERT INTO users (id, username, password, name, email) 
            VALUES ($this->id, '$this->username', '$this->password', '$this->name', '$this->email');");
        }
    }
}
?>