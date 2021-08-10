USE ucode_web;
CREATE TABLE IF NOT EXISTS powers(
    id int NOT NULL AUTO_INCREMENT,
    hero_id int NOT NULL,
    name text NOT NULL,
    points int NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY (hero_id)  REFERENCES heroes(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS races(
    id int NOT NULL AUTO_INCREMENT,
    hero_id int NOT NULL,
    name text NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS teams(
    id int NOT NULL AUTO_INCREMENT,
    hero_id int NOT NULL,
    name text NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id),
    PRIMARY KEY (id)
);
INSERT INTO powers (hero_id, name, type, points)
VALUES 
(1, 'bloody fist', 'attack', 110),
(6, 'iron shield', 'defense', 200);
INSERT INTO races (hero_id, name)
VALUES 
(1, 'Human'),
(6, 'Kree');
INSERT INTO teams (hero_id, name)
VALUES 
(1, 'Avengers'),
(6, 'Hydra');