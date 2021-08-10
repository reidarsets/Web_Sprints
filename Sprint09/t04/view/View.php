<?php
    class View {
        public function __construct($url) { 
            $this->url = file_get_contents($url); 
        }
        public function render() { 
            echo file_get_contents($this->url); 
        }
    }
?>