CREATE DATABASE ucode_web;

CREATE USER 'asemiletov'@'localhost' IDENTIFIED BY 'securepass'; 
GRANT ALL PRIVILEGES ON ucode_web . * TO 'asemiletov'@'localhost';