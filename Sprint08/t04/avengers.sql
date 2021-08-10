USE ucode_web;

SELECT heroes.hero_id, heroes.points FROM (
SELECT powers.hero_id, SUM(powers.points) AS points
FROM powers GROUP BY powers.hero_id) 
AS heroes ORDER BY heroes.points DESC LIMIT 1;

SELECT summa AS power, name FROM (
SELECT heroes.name AS name, sum(table1.points) AS summa
FROM heroes JOIN (
SELECT hero_id, points FROM powers WHERE type = 'defense') 
table1 ON table1.hero_id = heroes.id group by heroes.id ) 
temp ORDER BY power ASC limit 1;

SELECT power_sum AS power, name FROM (
SELECT heroes.name AS name, sum(powers.points) AS power_sum FROM heroes JOIN (
SELECT hero_id FROM teams WHERE name = 'Avengers') 
table1 ON table1.hero_id = heroes.id JOIN powers ON powers.hero_id = heroes.id GROUP BY heroes.id) temp
ORDER BY power DESC;

SELECT teams.name, SUM(powers.points) AS points
FROM heroes JOIN powers ON powers.hero_id = heroes.id JOIN teams ON teams.hero_id = heroes.id
GROUP BY teams.name ORDER BY points;