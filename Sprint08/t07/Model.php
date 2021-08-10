<?php
    abstract class Model {
        public function __construct($table) {
            $this->setConnection();
            $this->setTable($table);
        }
        protected function setTable($table) {
            $this->table = $table;
        }
        function setConnection() {
            $this->connection = new DatabaseConnection('localhost', null, 'asemiletov', 'securepass', 'ucode_web');;
        }
        abstract public function find($id);
        abstract public function delete();
        abstract public function save();
    }
?>