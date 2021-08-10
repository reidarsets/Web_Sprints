<?php
    class Overload {
        public function __set($name , $value) {
            $this->$name = $value;
        }
        public function __get($name) {
            if(property_exists($this, $name)) {
                return $this->$name;
            }
            else {
                return "NO DATA";
            }
        }
        public function __isset($name) {
            $this->$name = "NOT SET";
            return true;
        }
        public function __unset($name) {
            $this->$name = NULL;
        }
    }

    // $overload = new Overload();

    // $overload->mark_LXXXV = "INACTIVE";
    // echo $overload->mark_LXXXV;

    // echo "\n" . $overload->mark_LXXXVI;
    // if (isset($overload->mark_LXXXVI))
    //     echo"\n" . $overload->mark_LXXXVI;
    

    // unset($overload->mark_IV);
    // if ($overload->mark_IV== NULL)
    //     echo"\nNULL\n";
?>