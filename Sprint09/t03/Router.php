<?php
    class Router {
        public function __construct() {
            $this->params = [];
        }
        public function init($url) {
            $result = parse_url($url);
            $result = $result['query'];
            foreach(explode('&',$result) as $param) {
                $temp = explode('=', $param);
                $this->params[$temp[0]] = $temp[1];
            }
        }
        public function print() {
            $result = '{';
            foreach($this->params as $element => $param) {
                $result .= "'$element': '$param', ";
            }
            $result = $result . '}';
            echo $result;
        }
    }
?>