<?php
class Heroes extends Model {
    public $id;
    public $name;
    public $description;
    public $race;
    public $class_role;
    function __construct() {
        parent::__construct("heroes");
    }
    function __toString() {
        return "id: $this->id\n
                name: $this->name\n
                description: $this->description\n
                race: $this->race\n
                class_role: $this->class_role";
    }
    function find($id) {
       if($this->connection->getConnectionStatus()) {
           $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM heroes WHERE id=$id;"));
           if (isset($elements)) {
               $this->id = $elements['id'];
               $this->name = $elements['name'];
               $this->description = $elements['description'];
               $this->race = $elements['race'];
               $this->class_role = $elements['class_role'];
           }
       }
    }
    function delete() {   
        if($this->connection->getConnectionStatus()) {
            $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM heroes WHERE id=$this->id;"));
            if ($elements) {
                $this->connection->connection->query("DELETE FROM heroes WHERE id=$this->id;");
            }
        }
    }
    function save() {
        $elements = mysqli_fetch_assoc(mysqli_query($this->connection->connection, "SELECT * FROM heroes WHERE id=$this->id;"));
        if($elements) {
            $this->connection->connection->query("INSERT heroes SET name=$this->name, description=$this->description,
             race=$this->race, class_role=$this->class_role WHERE id=$this->id;");
        }
        else {
            $this->connection->connection->query("INSERT INTO heroes (id, name, description, race, class_role) 
            VALUES ($this->id, '$this->name', '$this->description', '$this->race', '$this->class_role');");
        }
    }
}
?>