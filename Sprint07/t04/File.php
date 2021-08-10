<?php
    class File {
        private $dir;
        private $path;
        private $descriptor;
        function __construct($file_name) {
            $this->file_name = $file_name;
            $this->file = fopen($this->file_name, "c");
            fclose($this->file);
        }
        public function write($data) {
            fwrite($this->file, $data);
        }
    }
?>