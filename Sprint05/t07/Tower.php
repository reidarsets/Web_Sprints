<?php
    class Tower extends Building {
        private $elevator;
        private $arc_capacity;
        private $height;

        function __construct(int $floors, string $material, string $address) {
            $this->$floors = $floors;
            $this->$material = $material;
            $this->$address = $address;
        }
        public function hasElevator() {
            if($this->elevator == true) {
                return true;
            }
            else {
                return false;
            }
        }
        public function setElevator($elevator) {
            $this->elevator = $elevator;
        }
        public function getArcCapacity() {
            return $this->arc_capacity;
        }
        public function setArcCapacity($arc_capacity) {
            $this->arc_capacity = $arc_capacity;
        }
        public function getHeight() {
            return $this->height;
        }
        public function setHeight($height) {
            $this->height = $height;
        }
        public function toString() : string
        {
            $props = ["Floors : " . $this->floors,
                "Material : " . $this->material,
                "Address : " . $this->address,
                "Elevator : " . ($this->hasElevator() ? '+' : '-'),
                "Arc reactor capacity : " . $this->arc_capacity,
                "Floor height : " . $this->getFloorHeight()
            ];

            $str = "";

            foreach ($props as $p)
                $str = $str . $p . "\n";
            return $str;
        }
        public function getFloorHeight(): float {
            return $this->height / $this->floors;
        }
    }
    // require_once(__DIR__. "/Building.php");
    // require_once(__DIR__. "/Tower.php");

    // $StarkTower = new Tower(93, "Different", "Manhattan, NY");

    // $StarkTower->setElevator(true);
    // $StarkTower->setArcCapacity(70);
    // $StarkTower->setHeight(1130);
    // echo $StarkTower->toString();
?>