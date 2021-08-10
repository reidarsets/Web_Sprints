USE ucode_web;
CREATE TABLE IF NOT EXISTS heroes (
    id int NOT NULL AUTO_INCREMENT,
    name text NOT NULL,
    description text NOT NULL,
    race text NOT NULL DEFAULT 'human',
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    PRIMARY KEY (id)
);