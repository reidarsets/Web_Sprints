<?php

class LList implements IteratorAggregate{
    public function getFirst() {
        return $this->head->data;
    }
    public function getLast() {
        $temp = new LLItem();
        $temp = $this->head;
        for (;$temp->next != null;$temp = $temp->next) {}
        return $temp->data;
    }
    public function add($value) {
        if($this->head == null){
            $this->head = new LLitem();
            $this->head->data = $value;
            return;
        }
        $item = $this->head;
        for(;$item->next != null;$item = $item->next){}
        $item->next = new LLitem();
        $item->next->data = $value;
    }
    public function addArr($array){
        for($i = 0; $i < count($array); $i++) {
            $this->add($array[$i]);
        }
    }
    public function remove($value){
        $item = $this->head;
        if($item->data == $value) {
            if($item->next == null) {
                $this->head = null;
                return true;
            }
            else{
                $this->head = $this->head->next;
            }       
        }
        while($item->next != null){
            if($item->next->data == $value && $item->next != null){
                $item->next = $item->next->next;
                return true;
            }
            $item = $item->next;
        }
        return false;
    }
    public function removeAll($value){
        while($this->remove($value));
    }
    public function contains($value) {
        $temp = $this->head;
        for(;$temp != null;$temp = $temp->next) {
            if ($temp->data == $value) {
                return 1;
            }
        }
        return 0;
    }
    public function clear(){
        $this->head = null;
    }
    public function count(){
        $item = $this->head;
        $repeat = 0;
        for($repeat = 0;$item != null;$repeat++){
            $item = $item->next;
        }
        return $repeat;
    }
    public function toString() {
        $temp = new LLItem();
        $temp = $this->head;
        if ($temp != null) {
            $mass = array();
            for (;$temp != null;$temp = $temp->next) {
                array_push($mass, $temp->data);
            }
            echo implode(', ', $mass);
        }
    }
    public function getIterator() {
        $temp = new LLItem();
        $temp = $this->head;
        $mass = array();
        for (;$temp != null;$temp = $temp->next) {
            array_push($mass, $temp->data);
        }
        return new ArrayIterator($mass);
    }
}
?>