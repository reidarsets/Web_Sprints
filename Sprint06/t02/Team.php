<?php
    class Team {
        public $id;
        public $avengers = array();

        function __construct($id, $avengers) {
            $this->id = $id;
            $this->avengers = $avengers;
        }

        function battle($damage) {
            foreach($this->avengers as $num => $hero) {
                $hero->hp -= $damage;
                if($hero->hp <= 0) {
                    unset($this->avengers[$num]);
                }
            }
        }
        function calculate_losses($cloned_team) {
            $prev = count($this->avengers);
            $current = count($cloned_team->avengers);
            if($prev == $current) {
                echo "We haven't lost anyone in this battle!\n";
            }
            else {
                echo "In this battle we lost " . ($current - $prev) . " Avenger(s).\n";
            }
        }
    }
    
    // require_once(__DIR__. "/Avenger.php");

    // $arr = array();

    // $arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,
    //                     ["intelligence", "durability", "magnetism"], 120);
    // $arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,
    //                     ["agility", "martial arts"], 75)                    
    // ;$arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,
    //                     ["durability", "flight", "interstellar travel"], 95);
                        
                        
    // $team= new Team(1, $arr);

    // echo "Battle 1\n";
    // $cloned_team = clone $team;
    // $damage = 25;
    // $team->battle($damage);
    // $team->calculate_losses($cloned_team);
    
    // echo"\nBattle 2\n";
    // $cloned_team= clone $team;
    // $damage= 80;
    // $team->battle($damage);
    // $team->calculate_losses($cloned_team);
?>