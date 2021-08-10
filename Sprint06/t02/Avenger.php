<?php
    class Avenger {
        public $name;
        public $alias;
        public $gender;
        public $age;
        public $power = array();

        public $hp;

        function __construct($name, $alias, $gender, $age, $power, $hp) {
            $this->name = $name;
            $this->alias = $alias;
            $this->gender = $gender;
            $this->age = $age;
            $this->power = $power;

            $this->hp = $hp;
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
?>