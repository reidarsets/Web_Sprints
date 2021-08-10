<?php
    class Avenger {
        public $name;
        public $alias;
        public $gender;
        public $age;
        public $power = array();

        function __construct($name, $alias, $gender, $age, $power) {
            $this->name = $name;
            $this->alias = $alias;
            $this->gender = $gender;
            $this->age = $age;
            $this->power = $power;
        }
        function __toString() {
            return "name: " . $this->name . "\n" . "gender: " . $this->gender . "\n" . "age: " . $this->age . "\n";
        }
        public function __invoke() {
            echo strtoupper($this->alias) . "\n";
            foreach($this->power as $element) {
                echo $element . "\n";
            }
            echo "\n";
        }
    }
    // $first_avenger= new Avenger("Tony Stark", "Iron Man", "man", 38,["intelligence", "durability", "magnetism"]);
    // $second_avenger= new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,["agility", "martial arts"]);

    // echo"*** calling\$first_avenger() ***\n";
    // $first_avenger();

    // echo"*** calling echo\$second_avenger ***\n";
    // echo $second_avenger;

    // echo"*** calling\$second_avenger() ***\n";
    // $second_avenger();
?>